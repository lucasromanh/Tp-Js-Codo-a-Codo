var continuar = true;

while (continuar) {
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
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log("Error: División por cero.");
            }
            break;
        default:
            console.log("Operador no válido.");
            break;
    }
    if (resultado !== undefined) {
        console.log("El resultado de la operación es: " + resultado);
    }
    var respuesta = prompt("¿Desea realizar otra operación? (S/N)").toUpperCase();
    if (respuesta !== "S") {
        continuar = false;
    }
}
