var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));
var operador = prompt("Ingrese un operador (+, -, *, /):");

var resultado;
switch (operador) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        console.log("Operador no válido.");
        break;
}

if (resultado !== undefined) {
    console.log("El resultado de la operación es: " + resultado);
}
