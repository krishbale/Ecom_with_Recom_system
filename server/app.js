const express = require('express')
const productRouter = require('./routes/product')
const cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use('/',productRouter)
app.listen(PORT,()=>console.log(`server is listening at PORT:${PORT}`))