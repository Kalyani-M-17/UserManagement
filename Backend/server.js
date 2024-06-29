const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");
const profileRoute = require("./routes/profileRoute");
const cors = require("cors");

const mongoose = require("mongoose");
const { allowOnlyLoggedInUser } = require("./middlewares/authMiddleware");

/**
 * Database connection
 */

mongoose.connect("mongodb://localhost:27017/test").then(() => {
  console.log("Connected....");
});

const app = express();
//Body Parser to parse incoming data
app.use(bodyParser.json());
//cors() to enable cross site origin support
app.use(cors());

// app.get("/", (req,res) =>{
//     console.log("res");

//     res.send("Working.....");
// });

app.use("/auth", authRoute);
app.use("/profile", allowOnlyLoggedInUser, profileRoute);
app.get("/", allowOnlyLoggedInUser, (req, res) => {
  res.send(req.user);
});

app.listen(5500, () => {
  console.log("Server Started.....");
});
