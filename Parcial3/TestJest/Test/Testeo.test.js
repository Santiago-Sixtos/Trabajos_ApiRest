//NOTA: Jest busca archivos con terminacion .test.js o .specs.js
const area = require("../src/area.js");

test("Deberia volver un 4",()=>{
    let res = area.areaCuadrado(2);
    expect(res).toEqual(4);
})

test("Deberia volver un 4",()=>{
    let res = area.areaCuadrado(2);
    expect(res).toEqual(4);
})