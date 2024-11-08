//import assert from 'node:assert'; //Asegurar la respuesta
import test from 'node:test'; // Importamos el Test de node para realizarlo en nuestro script
import * as chai from 'Chai';
import * as area from "../src/area.js";  //Importamos el metodo a realizar

test("Deberia volver un 4",()=>{
    let res = area.areaCuadrado(2);
    //assert.strictEqual(res, 4);
    chai.assert.equal(res, 4);
    chai.assert.typeOf(res, 'number');
})

test("Deberia volver un 4",()=>{
    let res = area.areaCuadrado(2);
    chai.expect(res).to.be.a('number');
})