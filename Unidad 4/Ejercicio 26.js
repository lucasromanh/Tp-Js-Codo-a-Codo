var sumatoria = 0;
var valorMinimo = Infinity;
var valorMaximo = -Infinity;

while (true) {
    var numero = parseFloat(prompt("Ingrese un número, o 0 para finalizar:"));
    if (numero === 0) {
        break;
    }

    sumatoria += numero;

    if (numero < valorMinimo) {
        valorMinimo = numero;
    }
    if (numero > valorMaximo) {
        valorMaximo = numero;
    }
}

console.log("Sumatoria de los números ingresados: " + sumatoria);
console.log("Menor valor ingresado: " + valorMinimo);
console.log("Mayor valor ingresado: " + valorMaximo);
