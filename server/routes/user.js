const express = require('express')
const { register,login, logout ,sessioncontroller} = require('../controller/user')
const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/isAuth',sessioncontroller)
module.exports = router