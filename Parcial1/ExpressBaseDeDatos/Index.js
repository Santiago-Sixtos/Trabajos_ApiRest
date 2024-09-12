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

app.post('/tdg', (req, res) => {
  const nuevoGatito = req.body; // Datos enviados por el cliente en el cuerpo de la solicitud

  // Realiza las operaciones necesarias 
  const insertQuery = "INSERT INTO tdg (ID, Nombre, Raza, Peso, Edad, Color) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [nuevoGatito.ID, nuevoGatito.Nombre, nuevoGatito.Raza, nuevoGatito.Peso, nuevoGatito.Edad, nuevoGatito.Color];

  connection.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error('Error al insertar el gatito:', error);
      return res.status(500).json({ message: 'Error al insertar el gatito' });
    }

    console.log('Gatito insertado correctamente');
    res.status(201).json({ message: 'Gatito insertado correctamente' });
  });
});


app.delete('/tdg/:id', (req, res) => {
  const gatitoId = req.params.id; // ID proporcionado en la URL

  // Realiza la eliminación del gatito con el ID proporcionado
  const deleteQuery = "DELETE FROM tdg WHERE ID = ?";
  connection.query(deleteQuery, [gatitoId], (error, results) => {
    if (error) {
      console.error('Error al eliminar el gatito:', error);
      return res.status(500).json({ message: 'Ocurrió un error en la eliminación' });
    }

    if (results.affectedRows === 1) {
      console.log('Gatito borrado correctamente');
      res.json({ message: 'Gatito borrado correctamente' });
    } else {
      res.json({ message: 'No se encontró ningún gatito con el ID especificado' });
    }
  });
});

 
// Escuchar en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});