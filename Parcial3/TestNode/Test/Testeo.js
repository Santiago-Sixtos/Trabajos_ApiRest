import assert from 'node:assert'; //Asegurar la respuesta
import test from 'node:test'; // Importamos el Test de node para realizarlo en nuestro script
import * as area from "../src/area.js";  //Importamos el metodo a realizar

test("Deberia volver un 4",()=>{
    let res = area.areaCuadrado(2);
    assert.strictEqual(res, 4);
})