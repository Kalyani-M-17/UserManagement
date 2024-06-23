const { sendOTPMail } = require("../controllers/mailController");
const { User } = require("../models/User");

const Router = require("express").Router;

const router = Router();

router.post("/login", (req,res) => {
    res.send("Login...");
});

router.post("/register", async (req,res) => {
    const data = req.body;

    const otp = Math.floor(1000 + Math.random() * 9000);

    const checkUser = await User.findOne({
        email:data.email,
    });

    if (checkUser) {
        return res.status(422).send({
            message: "Email already exist",
        });
    }

    const user = new User({...data, otp});
    const doc = await user.save();
    if (doc) {
        sendOTPMail(data.email, otp);
    }
    res.send(doc);
});
    
module.exports = router;

