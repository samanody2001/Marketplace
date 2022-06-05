const express = require("express");
const product = require("./ProductSchema/productSchema");
exports.get = async (req, res) => {
  try {
    const products = await product.find({});
    res.send({
      products,
    });
  } catch (err) {
    res.send({
      status: "[FAILED]",
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const createdProduct = await product.create(req.body);
    res.send({
      createdProduct,
    });
  } catch (err) {
    res.send({
      status: "[FAILED]",
      message: err.message,
    });
    console.log(err);
  }
};

exports.getByID = async (req, res) => {
  try {
    const productResponse = await product.findById(req.params.id);
    res.send(productResponse);
  } catch (err) {
    console.log(err);
    res.status(404).send({
      status: "[FAILED]",
      message: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await product.findByIdAndUpdate(req.params.id, req.body);

    res.send({
      updated,
    });
  } catch (err) {
    res.send({
      status: "[FAILED]",
      message: err.message,
    });
  }
};
