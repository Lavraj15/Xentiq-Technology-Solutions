const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for 587
  family: 4, // force IPv4 — fixes hangs/timeouts on Render, Railway, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000, // 10s to establish connection
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// Verify the connection once at startup so misconfiguration shows up
// immediately in the logs instead of only when a user submits the form.
transporter.verify((err) => {
  if (err) {
    console.error("❌ Mailer configuration problem:", err.message);
  } else {
    console.log("✅ Mailer is ready to send emails");
  }
});

module.exports = transporter;
