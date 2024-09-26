const express = require('express');
const app = express();
 const path = require('path');
const  cors  = require ('cors');
app.use(cors());
 
 
app.get('/sendFile',(req,res)=>{
    let archivo = path.join(__dirname,'/Imagenes/HALO3ODST.jpg');
    res.sendFile(archivo);
})

app.get('/download',(req,res)=>{
    let archivo = path.join(__dirname,'/Imagenes/HALO3ODST.jpg');
    res.download(archivo);
})

app.get('/attachment',(req,res)=>{
    let archivo = path.join(__dirname,'/Imagenes/HALO3ODST.jpg');
    res.attachment(archivo);
    res.send();
})
 
app.post('/',(req,res)=>{
    res.send('Server Express contestando a peticion post')
})
 
app.listen(3001,()=>{
    console.log('http://localhost:3000')
})