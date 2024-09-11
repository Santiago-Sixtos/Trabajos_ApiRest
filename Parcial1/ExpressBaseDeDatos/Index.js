const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
 
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
 
// Ruta para obtener datos de la tabla tdg por ID
app.get('/tdg', (req, res) => {
  let consulta = '';
 
  // Verificar si se pasa el parámetro "ID"
  if (typeof req.query.ID === 'undefined') {
    consulta = 'SELECT * FROM tdg';  // Selecciona todos los registros si no hay parámetro
  } else {
    consulta = 'SELECT * FROM tdg WHERE ID = ?'; // Consulta parametrizada por ID
  }
 
  // Ejecutar la consulta en la base de datos
  connection.query(consulta, [req.query.ID], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
 
    if (results.length === 0) {
      return res.json({ error: 'No se encontró el gatito' });
    }
 
    res.json(results);  // Devolver los resultados
  });
});
 
// Escuchar en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});

