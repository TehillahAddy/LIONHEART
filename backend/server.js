require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: ["http://localhost:3000", "https://lionheart-seven.vercel.app", "https://lionheart-tehillah-addys-projects.vercel.app"],
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
};
app.use(cors(corsOptions));
app.use(express.json());

// Email Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Email Route
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Email to Site Owner (You)
        const mailOptionsToOwner = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Confirmation Email to Sender
        const mailOptionsToSender = {
            from: process.env.EMAIL_USER,
            to: email, // Sends to the user who submitted the form
            subject: "We Received Your Message!",
            text: `Hello ${name},\n\nThank you for reaching out to us! We have received your message and will get back to you as soon as possible.\n\nBest Regards,\nLionheart Tech Team`,
        };

        // Send both emails
        await transporter.sendMail(mailOptionsToOwner);
        await transporter.sendMail(mailOptionsToSender);

        res.status(200).json({ success: true, message: "Emails sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email sending failed" });
    }
});

app.get("/", (req, res) => {
    res.send("📡 Backend is running...");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
