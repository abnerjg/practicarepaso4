// Solicitar al usuario los dos números y la operación
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (+, -, *, /):");

// Calcular el resultado basado en la operación
let resultado;
if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    resultado = num1 / num2;
} else {
    resultado = "Operación no válida";
}
// Mostrar el resultado en la consola
console.log("Resultado:", resultado);