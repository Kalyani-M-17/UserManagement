const bcrypt = require("bcryptjs");

const register = (req, res) => {
    return res.send("hello");
};

const hashPassword = async (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
};

const comparePassword = async(password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = {
    hashPassword,
    comparePassword,
}