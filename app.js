const express = require("express");
const app = express();
app.use(express.json())

//importing the middleware
const errorMiddleware = require('./middleware/error')

// Route Imports
const productRoute = require("./routes/productRoute");
app.use("/api/v1/product",productRoute)

//Middleware for Errors
app.use(errorMiddleware)


//Exporting the app as an module
module.exports = app
