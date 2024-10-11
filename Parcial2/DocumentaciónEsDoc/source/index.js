/**
 * Funcion para obtener el area de un circulo
 * @param {number} radio radio de la circunferencia
 * @returns {number} area del circulo
 */
 export function calcularAreaCirculo(radio) {
    const pi = Math.PI;
    const area = pi * radio ** 2;
    return area;
}

// Exportamos la función para que pueda ser utilizada en otros archivos
//module.import = calcularAreaCirculo;

