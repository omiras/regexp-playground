/**
 * Vamos a combinar método de array y expresiones regulares
 */

/**
 * Queremos crear una función que filtre las palabras que contienen solo letras (sin números ni caracteres especiales)
 * 
 * @param {Array<string>} words - Un array de palabras
 * @returns {Array<string>} - Devuelve un array con las palabras que contienen solo letras
 */

function filterWords(words) {
    // Expresión regular para verificar si una palabra contiene solo letras. SOLAMENTE cambiar la siguiente línea
    const regex = /^cambiar$/

    // Usa el método filter para filtrar las palabras que coinciden con la expresión regular
    return words.filter(word => regex.test(word));
}

// Juegos de pruebas

// Prueba 1: Array con palabras mixtas
// Explicación: ["hello", "world123", "test", "foo!"] contiene palabras con solo letras ("hello", "test")
// Resultado esperado: ["hello", "test"]
console.log(filterWords(["hello", "world123", "TEST", "foo!"])); // ["hello", "TEST"]

// Prueba 2: Array con todas las palabras válidas
// Explicación: ["apple", "banana", "cherry"] todas las palabras contienen solo letras
// Resultado esperado: ["apple", "banana", "cherry"]
console.log(filterWords(["apple", "banana", "cherry"])); // ["apple", "banana", "cherry"]

// Prueba 3: Array con todas las palabras no válidas
// Explicación: ["123", "hello!", "world?"] ninguna de las palabras contiene solo letras
// Resultado esperado: []
console.log(filterWords(["123", "hello!", "world?"])); // []