
const regexp = /cas(i|o)ta/;  // RegExp que acepta "casita" o "casota"

console.log(regexp.test("casita"));        // true
console.log(regexp.test("casota"));        // true
console.log(regexp.test("caseta"));        // false

const regexurl= /^(http|https):/; //Las URL puede empezar por http o https