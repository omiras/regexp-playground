const regexp = /\d{4}/;

console.log(regexp.test("1234"));

// Forma alternativa de crear una expresión regular que es instanciando un nuevo objeto de la clase RegExp
const regexp_2 = new RegExp("\\d{4}");
console.log(regexp_2.test("1234"));

console.log("Patata entre \"comillas\" ");
console.log("Para indicar que queremos poner un dígito en expresiones regulares podemos usar \\d");
