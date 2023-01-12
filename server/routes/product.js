const express = require('express')
const router = express.Router()
const product = require("../controller/products")
const recom = require('../controller/recommendation')
// const authentication = require('../middleware/authenticate')

router.get('/products/',product)
router.get('/getrecom/:id',recom)

module.exports = router

