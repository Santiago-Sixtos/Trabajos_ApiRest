const express = require('express');
const cors = require ('cors');
const multer = require('multer')
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express();
const upload = multer();

app.use(cors()); //Middleware de tercero
app.use(express.json()); //Middleware incorporado en express
app.use(express.text()); //Middleware de texto 
app.use(express.urlencoded({extended: true})); //Middleware para parsear un formulario url encode
app.use(upload.none()) //Middleware para parsear un for data
app.use(bodyParser.xml()); //Formularios xml

app.post('/clientes',(req,res)=>{
    console.log(req.body)
    res.json({Mensaje: 'Server Express contestando a peticion post'})
})
 
app.listen(3001,()=>{
    console.log('Server express escuchando puerto 3000')
})

