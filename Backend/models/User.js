const mongoose = require ("mongoose");

const user = mongoose.model("User", {
    name: String,
    email: {
        type: String,
        required: true,
    },
    password: String,
});

module.exports = {
    User,
};