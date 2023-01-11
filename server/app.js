require('dotenv').config();
const express = require('express')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');
//middlware

app.use(cors())
app.use(express.json())

app.use('/',userRouter)
app.use('/',productRouter)
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>console.log(` Database connected and server is listening at PORT:${PORT}`))

    }catch(e){
        console.log(e);
    }

}
start();
