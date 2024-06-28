const jwt = require ("jsonwebtoken");
const { User } = require("../models/User");

const allowOnlyLoggedInUser = async(req, res, next) => {
    // console.log(req.header("Authorization"))
    const token = req.header("Authorization");

    console.log("token", req.header("Authorization"));
    if (!token) {
        return res.status(401).json({ message: "Token not found" });
    }
    console.log("checkUser");

    try{
        const payload = jwt.verify(token, "kauaaaooollagytyuyiouiu");
        const checkUser = await User.findById(payload.user.id);
        console.log(checkUser);
        req.user = checkUser;
        next();
    } catch (e) {
        return res.status(401).json({ message: "Token not valid" });
    }
};

module.exports = {
    allowOnlyLoggedInUser,
};