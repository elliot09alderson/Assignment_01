const express = require("express");
//------------------Importing The Functions by Destructuring----------------
const {
  getAllProducts,
  getProductDetails,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//Using the Router Module
const router = express.Router();

//Adding routes of Product {CRUD}
router.route("/readAll").get(getAllProducts);
router.route("/create").post(createProduct);
router.route("/update/:id").put(updateProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/:id").get(getProductDetails);
module.exports = router;
