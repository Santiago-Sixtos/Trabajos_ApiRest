const express = require('express');
const app = express();
const cors = require ('cors');

app.use(cors()); //Middleware de terceros 
app.use((req, res,next)=>{  //Middleware de aplicacion
    console.log(new Date());
    next();
})

app.use(express.json());    //Middleware incorporado en express
 
app.get('/',cors(),(req,res)=>{
    res.json({Mensaje: 'Server Express contestando a peticion get'})
    next(error);
})
 
app.post('/',(req,res)=>{
    res.json({Mensaje: 'Server Express contestando a peticion post'})
})
 
app.listen(3001,()=>{
    console.log('http://localhost:3000')
})

app.use(function(err, req, res, next){  //Middleware de manejo de errores
    res.status(500).send('Algo no ha salido bien')
})