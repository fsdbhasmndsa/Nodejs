const express = require("express")
const route = express.Router();
const homecontroller = require("../../controllers/client/home.controller")

route.get('/',homecontroller.index );


module.exports = route