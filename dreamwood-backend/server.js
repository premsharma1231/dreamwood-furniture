import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// 🔥🔥🔥 ADD THIS (QUOTATION EMAIL ROUTE)
app.post("/api/quotation", async (req, res) => {
  const { name, phone, email, productName, productLink } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: "info@dreamwoodfurniture.in",
      subject: "New Quotation Request 🪵",
      html: `
        <h2>New Quotation Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Product:</b> ${productName}</p>
        <p><b>Link:</b> ${productLink}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.log("Email Error:", err);
    res.status(500).json({ success: false });
  }
});


// PORT FIX (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});