/** 
 * 1. Explora como funciona el método .match de los strings: https://javascript.info/regexp-methods#str-match-regexp
 * 2. Modifica el cuerpo de la función para extraer todos los colores hexadecimales presentes en el string. Para simplificar, los colores hexadecimales siempre tendrán 6 carácteres pero pueden ser tanto en mayúsculas como en minúsculas y números
 *  
 * * @param {string} s 
 * @returns {Array<string>} Devuelve un array con los colores hexadecimales encontrados
 */


function extractHexColors(s) {
    /** Modifica solamente el cuerpo de la función */
    // Utiliza adecuadamente el ejemplo play9.js para detectar todos los colores hexadecimales que aparecen en los strings de entrada
    // Corregir en 20.30

    // Los colores hexadecimales siempre tienen un # seguido de 6 dígitos y/o carácteres de la A a la F
    const regexp = /#[0-9A-F]{6}/gi;

    return s.match(regexp) || [];
}

// Juegos de pruebas


// Prueba 1: Cadena con un color hexadecimal 
// Explicación: "#0041C2 is a valid color."
// Resultado esperado: ["#0041C2"]
console.log(extractHexColors("#0041C2 is a blue called 'Blueberry Blue' ")); // ["#0041C2"]

// Prueba 1: Cadena con colores hexadecimales
// Explicación: "#ff5733 is a bright color and #33ff57 is a green color."
// Resultado esperado: ["#ff5733", "#33ff57"]
console.log(extractHexColors("#ff5733 is a bright color and #33FF57 is a green color.")); // ["#ff5733", "#33FF57"]


// Prueba 3: Cadena sin colores hexadecimales
// Explicación: "This string has no hex colors."
// Resultado esperado: []
console.log(extractHexColors("This string has no hex colors.")); // []
