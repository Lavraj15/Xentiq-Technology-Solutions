const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const transporter = require("../utils/mailer");

function buildMail({ name, email, phone, service, message }) {
  const receiver = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;
  return {
    from: `"Xentiq Website" <${process.env.EMAIL_USER}>`,
    to: receiver,
    replyTo: email,
    subject: `New enquiry from ${name} — Xentiq website`,
    text: [
      `New contact form submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Service: ${service || "-"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 15px; color: #0b1526;">
        <h2 style="color:#1d5ff2;">New enquiry from Xentiq website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line; background:#f5f8fc; padding:14px; border-radius:8px;">${message}</p>
      </div>
    `,
  };
}

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // 1. Save the enquiry to MongoDB first — this is the critical part.
    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    // 2. Respond to the user immediately once it's saved, so a slow or
    //    failing email server never makes the form feel broken.
    res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      id: contact._id,
    });

    // 3. Try to send the notification email in the background. If it fails,
    //    it's logged here (check your terminal / Render logs) but does NOT
    //    affect the user's experience.
    try {
      const info = await transporter.sendMail(
        buildMail({ name, email, phone, service, message }),
      );
      console.log("📧 Notification email sent:", info.messageId);
    } catch (mailErr) {
      console.error("❌ Failed to send notification email:", mailErr);
    }
  } catch (err) {
    console.error("Contact form error:", err.message);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }
  }
});

module.exports = router;
