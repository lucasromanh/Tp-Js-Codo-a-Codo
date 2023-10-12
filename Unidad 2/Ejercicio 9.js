var numero = parseInt(prompt("Ingrese un número:"));

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("El número es múltiplo de 3 y de 5");
} else if (numero % 3 === 0) {
    console.log("El número es múltiplo de 3");
} else if (numero % 5 === 0) {
    console.log("El número es múltiplo de 5");
} else {
    console.log("El número no es múltiplo de 3 ni de 5");
}
