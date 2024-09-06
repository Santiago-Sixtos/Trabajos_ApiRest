const express = require('express');
const app = express();
const cors = require ('cors');

app.use(cors()); //Middleware de tercero
app.use(express.json()); //Middleware incorporado en express
app.use(express.text()); //Middleware de texto 
 
app.get('/clientes/:id',cors(),(req,res)=>{
    console.log(req.params)
    res.json({Mensaje: 'Server Express contestando a peticion get'})
})
 
app.post('/clientes/',(req,res)=>{
    console.log(req.query)
    res.json({Mensaje: 'Server Express contestando a peticion post'})
})

app.put('/clientes/',(req,res)=>{
    console.log(req.body)
    res.json({Mensaje: 'Server Express contestando a peticion put'})
})
 
app.listen(3001,()=>{
    console.log('http://localhost:3000')
})

