const express = requiere('express');
const path = requiere('path');
const pug = requiere('pug');
const app = express();
const cors = requier('cors');

app.use(cors())
app.set('view engine', 'pug');
app.set('views', path.join(_dirname, 'views'));

app.get('/', (req, res, next) =>{
    console.log(req.query.nombre);
    let opciones = { nombre:req.query.nombre };
    res.render('mivista', opciones)
})

app.listen(3000, () => {
    console.log('Server Express escuchando en el puerto 3000');
});