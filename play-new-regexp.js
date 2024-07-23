// Detectar si contiene la palabra azul, tanto en mayúsculas como minúsculas

const text = "El cielo es aZuL";

const wordToSearch = "cielo";

const regexp = new RegExp(wordToSearch, "i");
console.log(regexp.test(text));
