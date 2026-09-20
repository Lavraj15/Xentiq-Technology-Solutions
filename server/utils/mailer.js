const nodemailer = require('nodemailer');

// Uses Gmail SMTP with an App Password (see README for setup steps).
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transporter;
