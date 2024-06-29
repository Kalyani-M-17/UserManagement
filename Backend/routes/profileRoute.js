const { User } = require("../models/User");
const { route } = require("./authRoute");

const Router = require("express").Router;
const router = Router();

router.get("/", (req, res) => {
  res.send({
    name: req.user.name,
    email: req.user.email,
  });
});

router.put("/", async (req, res) => {
  const user = await User.findById(req.user.id);
  user.name = req.body.name;
  user.save();

  res.send({ message: "Updated" });
});

module.exports = router;
