const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb+srv://premsharma786zx:QAZQAZqaz11!!@dreamwoodfurniture.lektosl.mongodb.net/?appName=DreamwoodFurniture")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);