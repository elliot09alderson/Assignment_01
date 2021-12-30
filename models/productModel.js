const mongoose = require("mongoose");
const Category = require('./categoryModel')

//creating product Schema
const productSchema = mongoose.Schema({
  productId: {
    type: String || Number,
    unique: [true, "Id already been taken, Please choose another id"],
    required: [true, "Please Enter Product Id"],
  },
  productName: {
    type: String,
    required: [true, "Please Enter Product Name"],
    maxLength: [12, "name cannot exceeds 12 characters"],
    minLength: [3, "name should contains at least 3 characters"],
  },
  qtyPerUnit: {
    type: Number,
    required: [true, "Plese Enter Quantity in units"],
  },
  unitPrice: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [8, "Price cannot exceeds 8 characters"],
  },
  unitInStock: {
    type: Number,
    required: [true, "Please enter Product Category"],
    default: 1,
    maxLength: [6, "Stock cannot exceeds 6 characters"],
  },
  discontinued: {
    type: Boolean,
    required: true,
    default: true,
  },
  categoryId: {
    type: String || Number,
    required: [true, "Please Enter Category Id"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
  categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'Category'}
});

module.exports = mongoose.model("Product", productSchema);
