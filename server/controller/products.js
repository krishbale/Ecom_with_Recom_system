const data = require("../ProductItem/product.json")
const scorearray = require('../algorithms')

const products = async (req,res,next)=>{
console.log(scorearray)
    res.status(200).json({
        success:true,
        data,
        
    })
}
 module.exports = products