const User = require('../models/userSchema');
const bcrypt = require('bcryptjs')
var mongo = require('mongodb').MongoClient;
const register = async (req,res,next)=>{
    const { username , password } = req.body;
    
    if(!username  || !password ){
    
        return res.status(422).json({error: "please fill the field properly "})
    }
    try{
        const userExist =  await User.findOne({ username:username })
        if(userExist){
          return res.status(422).json({error: "Choose another username "}) 
                       }
             
        const user = new User({ username , password  })
        await user.save();
        user? 
                         
                              res.json({
                                success:"true",
                                message: "User registered successfully "}) : res.json({success:"false",message:"unable to registered user"})
                    //    }
      }catch(err){
          console.log(err);
      }
    
   
}
const login = async (req,res,next)=>{
   

    try{
        const { username , password, } = req.body;
        if(!username||!password){
            return res.status(422).json({error: "please fill the field properly "})
    
        }
        
        const userLogin = await User.findOne({username:username})
        if(!userLogin){
            res.status(422).json({"message" : "Not a Valid Credentials"})
            console.log('Not valid Credentials')
        }else if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            if(!isMatch){
                res.status(422).json({"message" : "Try again with valid passwords"})
            }else{
          
            res.status(200)
            .json({
                message:"user login successfull",
              
                success:true,
            });
            }
            
            }
            } catch(err){
                console.log(err)
               
            
        }
}


 module.exports = { register , login }