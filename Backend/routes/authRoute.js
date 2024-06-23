// const { hashPassword } = require("../controllers/authController");
const { hashPassword, comparePassword } = require("../controllers/authController");
const { sendOTPMail } = require("../controllers/mailController");
const { User } = require("../models/User");
const Router = require("express").Router;
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/login", async(req,res) => {
    const data = req.body;
    let user = await User.findOne({ email: data.email });

    //Check is password is matching
    const isMatch = await comparePassword(data.password, user.password);
    if(!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = {
        user: {
            id: user.id,
        },
    };

    jwt.sign(payload, "kauaaaooollagytyuyiouiu", {expiresIn: 3600}, (err, token) => {
        if (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
        
        res.send({ token });
    });
});

router.post("/register", async (req,res) => {
    const data = req.body;

    const otp = Math.floor(1000 + Math.random() * 9000);

    //Checking if user is already available
    const checkUser = await User.findOne({
        email:data.email,
    });

    if (checkUser) {
        return res.status(422).send({
            message: "Email already exist",
        });
    }

    // const user = new User({...data, otp});

    // hash password
    const password = await hashPassword(data.password);
    const user = new User({...data, otp, password});
    const doc = await user.save();
    if (doc) {
        sendOTPMail(data.email, otp);
    }
    res.send(doc);
});

router.post("/verify_otp", async (req,res) => {
    const otp = req.body.otp;
    const email = req.body.email;

    const user = await User.findOne({
        email : email,
    });

    if (!user) {
        return res.status(401).send({
            message: "Account does not exist",
        });
    }

    if(user.otp != otp) {
        return res.status(422).send({
            message: "Invalid OTP",
        });
    }

    user.verifiedAt = new Date();
    user.save();

    // res.send("OTP");
    return res.status(200).send({
        message: "Success",
    });

});
    
module.exports = router;

