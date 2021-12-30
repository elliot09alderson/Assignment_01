const Product = require("../models/productModel");
const Category = require("../models/categoryModel")
const ErrorHandler= require("../utils/ErrorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//-------------- Creating Product ----------------------------
exports.createProduct = catchAsyncErrors (async (req, res, next) => {
  const product = await Product.create(req.body);

  //Sending Response ....
  res.status(201).json({
    message: "Product Created SuccessFully",
    product,
    success: true,
  }); 
});

//-------------- Fetching All Products ----------------------------
exports.getAllProducts = catchAsyncErrors (async (req, res, next) => {
  product = await Product.find();

  //Sending Response ....
  res.status(200).json({
    success: true,
    product,
  });
});

//-------------- Deleting Product ----------------------------
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found",404))
  }
  await product.remove();     //Removing the product

  //Sending Response
  res.status(200).json({
    success: true,
    message: "product is deleted" 
  });
});

//-------------- Fetching Product Details ----------------------------
exports.getProductDetails =catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not Found!",404))
  }

  //Sending Response
  res.status(200).json({
    success: true,
    product 
  });
});

//-------------- Updating Product ----------------------------
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {                       //checking whether the product is in the database or not
    return next(new ErrorHandler("Product Not Found",404))
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,                          //Updating the product
    runValidators: true,
    useFindAndModify: false,
  });
  //Sending Response
  res.status(200).json({ success: true, message: "product is Updated...", product });
});
