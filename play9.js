const text = "Los tomates valen 100€, el aceite de olvida 200€, y el jamón vale 300€";

// Quiero capturar todos los precios de este string
const regexp = /\d+€/g;

// el match devuelve un array con todas las subcadenas de texto que cumplen con la expresión regular
console.log(text.match(regexp));