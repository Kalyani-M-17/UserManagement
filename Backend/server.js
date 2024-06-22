const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req,res) =>{
    console.log("res");

    res.send("Working.....");
});

app.listen(5500, () => {
    console.log("Server Started.....");
});




