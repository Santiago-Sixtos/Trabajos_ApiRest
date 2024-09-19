const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
var router = express.Router();
const Gatitos = require('./Rutas/Gatitos.js')
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
 
// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Coloca tu contraseña si es necesaria
  database: 'gatitos',
});
 
// Middlewares
app.use(cors()); // Middleware de terceros
app.use(express.json()); // Middleware incorporado en express
app.use(express.text()); // Middleware para texto

//Declaramos el middleware
app.use('/tdg', Gatitos.router);

// Escuchar en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});