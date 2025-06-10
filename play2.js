const regexp = /[aeiou]/i;   // RegExp que acepta cualquier vocal 


console.log(regexp.test("a")); // true
console.log(regexp.test("e")); // true
console.log(regexp.test("u")); // true
console.log(regexp.test("m")); // false
console.log(regexp.test("U")); // true             