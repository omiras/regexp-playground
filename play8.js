const prices = "100€,300€,600$,900$";

// Quiero quedarme con el string, separado por comas pero sin el símbolo de la moneda
const cleanPrices = prices.replace(/[€$]/g, '');
console.log("🚀 ~ file: play8.js:5 ~ cleanPrices:", cleanPrices);
