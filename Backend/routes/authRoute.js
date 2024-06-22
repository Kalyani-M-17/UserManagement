const Router = require("express").Router;

const router = Router();

router.post("/login", (req,res) => {
    res.send("Login...");
});

router.post("/register", (req,res) => {
    res.send("Register...");
});

module.exports = router;

