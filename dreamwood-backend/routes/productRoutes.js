import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// 👉 GET all products
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let products;

    if (category) {
      products = await Product.find({
        category: { $regex: new RegExp(category, "i") }
      });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// 👉 ADD product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error adding product" });
  }
});

// 👉 DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
});

export default router;