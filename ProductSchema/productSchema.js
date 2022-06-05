const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  stock: {
    type: Number,
    required:true
  },
  price: {
    type: Number,
    required:true
  },
  image: {
    type: String,
  }
});

const products = mongoose.model("products", productsSchema);

module.exports = products;
