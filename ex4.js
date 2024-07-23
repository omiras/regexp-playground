/**
 * Queremos crear una función que "limpie" todos los números de un string
 * Kata: https://www.codewars.com/kata/57e1e61ba396b3727c000251
 * 
 * @param {string} s 
 * @returns Devuelve un string sin números
 */

function stringClean(s) {
    // Cambia únicamente la siguiente línea
    // El operador global /g hará que el método .replace NO se detenga tras encontrar el primer número
    const regex = /[0-9]/g;

    //https://javascript.info/regexp-methods#str-replace-str-regexp-str-func
    // La función replace va a usar la expresión regular regex para buscar todos los carácteres que son un número en el string 's'. Luego va a subtituir ese caráctere por el carácter vacío '', "limpiando" así el string 's' de números. 
    return s.replace(regex, '');
}

// Juegos de pruebas

// Prueba 1: Cadena con números al principio
// Explicación: "123hello" contiene números al principio que deben ser eliminados
// Resultado esperado: "hello"
console.log(stringClean("123hello")); // "hello"

// Prueba 2: Cadena con números al final
// Explicación: "world456" contiene números al final que deben ser eliminados
// Resultado esperado: "world"
console.log(stringClean("world456")); // "world"

// Prueba 3: Cadena con números en el medio
// Explicación: "foo123bar" contiene números en el medio que deben ser eliminados
// Resultado esperado: "foobar"
console.log(stringClean("foo123bar")); // "foobar"