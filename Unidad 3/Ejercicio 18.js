var minimo = parseInt(prompt("Ingrese el valor mínimo del rango:"));
var maximo = parseInt(prompt("Ingrese el valor máximo del rango:"));
var numero = parseInt(prompt("Ingrese un número:"));


if (numero >= minimo && numero <= maximo) {
    console.log("El número está dentro del rango.");
    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
} else {
    console.log("El número está fuera del rango.");
    console.log("El número es impar.");
}
