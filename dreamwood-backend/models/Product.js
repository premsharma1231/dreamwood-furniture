import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
    uppercase: true,
  },

  description: {
    type: String,
    default: "",
  },

  material: {
    type: String,
    default: "Wood",
  },

  isCustomizable: {
    type: Boolean,
    default: true
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;