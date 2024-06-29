const nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "290132cba9db65",
    pass: "2df6cbf2410cbf",
  },
});

/**
 * This function sends an email to user with OTP
 * @param {number} email
 * @param {number} otp
 */

const sendOTPMail = async (email, otp) => {
  const info = await transport.sendMail({
    from: '"Admin" <admin@app.com>',
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is : ${otp}`,
    html: `<p>Your OTP is : <b>${otp}</b></p>`,
  });
};

module.exports = {
  sendOTPMail,
};
