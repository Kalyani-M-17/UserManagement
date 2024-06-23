const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test").then(() => {
    console.log("Connected....");
});

const app = express();
app.use(bodyParser.json());

// app.get("/", (req,res) =>{
//     console.log("res");

//     res.send("Working.....");
// });

app.use("/auth", authRoute);

app.listen(5500, () => {
    console.log("Server Started.....");
});




