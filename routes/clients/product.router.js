const express = require("express")
const route = express.Router();
const productcontroller = require("../../controllers/client/product.controller")

route.get('/',productcontroller.index );


module.exports = route