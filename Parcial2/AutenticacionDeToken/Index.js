const express = require('express');
const app = express();
const bearerToken = require('express-bearer-token');

const  cors  = require ('cors');
app.use(cors());
app.use(bearerToken());
 
app.get('/ruta-protegida',(req,res)=>{
    const token = req.token;
    res.send('Token verificado')
})
 
app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
})
 
app.listen(3001,()=>{
    console.log('http://localhost:3000')
})