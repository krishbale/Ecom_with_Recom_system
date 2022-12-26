//npm i express for the express modules
const express = require('express');
const app = express();

//sending hello world from backend 

app.get('/product',(req,res)=>{
  res.send("Finally Project started"
  )
});
app.post('/login',(req,res)=>{
  res.send("Hello from server");
})

//creating server for the backend
let port = 5000
  app.listen(port, () => {
    console.log('Server listening on port http://localhost:5000');
  });