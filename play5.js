/** Quiero poner un precio a un producto SIN DECIMALES (Puede contener un numero indeterminado de números y debe acabar en $ o €) */

// 345100€
// 112$
// $ -> NO
// $55 -> NO (porque los números tienen que ir antes)

const regexp = /^[0-9]+(\$|€)$/;

console.log(regexp.test("3451€")); // true
console.log(regexp.test("3451$")); // true
console.log(regexp.test("$")); // false
console.log(regexp.test("$55")); // false