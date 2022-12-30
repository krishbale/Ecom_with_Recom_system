const express = require('express')
const router = express.Router()
const product = require("../controller/products")


router.route('/products').get(product)
module.exports = router

