const express = require('express');
const pug = require('pug');
const path = require('path');
 
const app = express();
 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
 
app.get('/mivista', (req, res, next) => {
    console.log(req.query.nombre);
    let opciones = { nombre: req.query.nombre };
    res.render('index', opciones);
});
 
app.listen(3001, () => {
    console.log('Server Express escuchando en puerto 3001');
});