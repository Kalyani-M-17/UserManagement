const bcrypt = require("bcryptjs");

/**
 * This function encrypts the password and return the hash
 * @param {string} password
 * @returns { string }
 */

const hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

/**
 * This function takes in password and hash, then return true if both are matched
 * @param {string} password
 * @param {string} hash
 * @returns {boolean}
 */

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
