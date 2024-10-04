const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');

const usuario = {'Santiago': 'contrasena'};
const  cors  = require ('cors');
app.use(cors());
app.use(basicAuth({usuario, challenge: true, 
    unauthorizedResponse: 'Acceso no autorizado'
}));
 
 
app.get('/ruta-protegida',(req,res)=>{
    res.send('Esta ruta esta siendo protegida')
})
 
app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
})
 
app.listen(3001,()=>{
    console.log('http://localhost:3000')
})