const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/empleado', cors(), (req, res) => {
    res.json({ mensaje: 'Server Express contestando a peticion get' });
});

app.listen(3002, () => {
    console.log('Server Express escuchando en puerto 3002');
});
