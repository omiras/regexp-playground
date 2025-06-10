/**
 * Tenemos un string y queremos saber si es un DNI válido
 */


// ¿Que patrón describe un DNI? Es decir, que combinación de números y letras caracteriza un DNI
// Tiene 8 dígitos y una letra

// Para declarar una expresión regular vamos usar una notación nueva que es / /
// [] -> Se usa para dar la opción de usar cualquiera de los carácteres contenidos entre los corchetes
// 0-9 -> Cualquier número del 0 al 9
// {8} -> Indica que queremos 8 números del 0 al 9 (0,1,2,3,4,5,6,7,8,9)
// [A-Z] -> Cualquier carácter EN MAYÚSCULAS de la A a la Z (A,B,C......Z)
// Si no le pongo {} (cuantificador) significa que solo queremos UNA ocurrencia
// ^ -> Inicio de string (empiezo por)
// $ -> Final de string (acaba por) . Ambos se usan para delimitar la expresión regular

let regex = /^[0-9]{8}[A-Z]$/;

// Los Regexp tienen un método que se llama .test
// El método .test devuelve true si el string que le pasamos por parámetro cumple con la expresión regular y false en caso contrario.
// IMPORTANTE: NO estamos validando si la letra es "la que toca" para esa numeración

let isValid = regex.test("12345678L"); // entradas invalids: 333444A, 123456781,  

if (isValid) {
    console.log("El DNI introducido es válido");
} else {
    console.log("El DNI introducido NO es válido");
}