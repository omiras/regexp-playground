// En el diccionario de la RAE se acepta: casita, casota, caseta

const regexp = /cas[aei]ta/;  // RegExp que acepta "casita" o "casota"

console.log(regexp.test("casita"));        // true
console.log(regexp.test("casota"));        // true
console.log(regexp.test("caseta"));        // true

console.log(regexp.test("casuta"));        // false
