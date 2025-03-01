require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Fixed CORS Setup
const allowedOrigins = [
    "http://localhost:3000",
    "https://lionheart-seven.vercel.app",
    "https://lionheart-tehillah-addys-projects.vercel.app"
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log("❌ Blocked by CORS:", origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
    credentials: true, // Allow cookies/auth headers
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ Debugging: Check if environment variables are loaded
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "✅ Loaded" : "❌ Not Found");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ Loaded" : "❌ Not Found");
console.log("RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL ? "✅ Loaded" : "❌ Not Found");

// ✅ Contact Form API
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "✅ Email sent successfully!" });
    } catch (error) {
        console.error("❌ Email sending error:", error);
        res.status(500).json({ error: "Email sending failed" });
    }
});

// ✅ Debugging Route
app.get("/", (req, res) => {
    res.send("📡 Backend is running...");
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
