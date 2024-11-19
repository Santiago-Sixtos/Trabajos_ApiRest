const request = require('supertest');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());

app.get('/empleado', cors(), (req, res) => {
    res.json({ mensaje: 'Server Express contestando a peticion get' });
});

describe('Conjunto de pruebas', () => {
    it('Revisar que servidor me de 200', async () => {
        const response = await request(app).get('/empleado');
        expect(response.status).toBe(200);
    });
});

module.exports = app;