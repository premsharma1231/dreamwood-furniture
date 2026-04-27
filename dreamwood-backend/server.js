const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
import authRoutes from "./routes/auth.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});