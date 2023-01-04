const express = require('express')
const router = express.Router()
const product = require("../controller/products")

const recomendationcontroller = require('../controller/ecomrecom')
router.route('/products').get(product)
router.route('/recomdata/:id').get(recomendationcontroller)
module.exports = router

