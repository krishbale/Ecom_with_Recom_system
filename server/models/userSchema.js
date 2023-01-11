const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
  
   
})

 //securing the password
 //hashing the password
 userSchema.pre('save', async function(next)  {
    
    if ( this.isModified('password'))
    {
        this.password=  await bcrypt.hash(this.password,12);
    }
    next();

 })


const User = mongoose.model('USER',userSchema);
module.exports= User;