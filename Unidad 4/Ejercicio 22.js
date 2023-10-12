var num1 = parseInt(prompt("Ingrese el primer número:"));
var num2 = parseInt(prompt("Ingrese el segundo número:"));
var num3 = parseInt(prompt("Ingrese el tercer número:"));


if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log("El primer número es múltiplo de 3 y de 5");
} else if (num1 % 3 === 0) {
    console.log("El primer número es múltiplo de 3");
}

