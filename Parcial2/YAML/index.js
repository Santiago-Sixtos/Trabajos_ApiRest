const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const archivo = fs.readFileSync(path.join(__dirname, "/Archivo.yml"), 'utf-8'); 
const estYaml = YAML.parse(archivo);

console.log(typeof estYaml);
console.table(estYaml);
