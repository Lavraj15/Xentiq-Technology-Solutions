const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
  logger: true, // <-- prints full SMTP conversation to console
  debug: true, // <-- prints full SMTP conversation to console
});

transporter.verify((err) => {
  if (err) {
    console.error("❌ Mailer configuration problem:", err.message);
  } else {
    console.log("✅ Mailer is ready to send emails");
    console.log("   Sending FROM account:", process.env.EMAIL_USER);
    console.log(
      "   Sending TO account:",
      process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
    );
  }
});

module.exports = transporter;
