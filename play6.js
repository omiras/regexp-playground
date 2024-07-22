// Los dnis pueden tener o no tener un guión entre los números y la letra


// \d{8} - quiero 8 dígitos
// [A-Z] - Una letra de la A a la Z
// [-]? - El guión puede estar o no puede estar
const regexp = /\d{8}[\s-]?[A-Z]/i;

console.log(regexp.test("12345678-a"));
console.log(regexp.test("12345678a"));
console.log(regexp.test("12345678 a"));