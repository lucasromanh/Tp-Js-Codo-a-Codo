var mujeresMayores25 = 0;
var hombresMenores18 = 0;
var acumuladoEdadesMujeres = 0;
var acumuladoAlturasHombres = 0;
var menorEdad = Infinity;
var mayorAltura = -Infinity;

while (true) {
    var sexo = prompt("Ingrese el sexo (H para hombre, M para mujer):").toUpperCase();
    var edad = parseInt(prompt("Ingrese la edad:"));
    var altura = parseFloat(prompt("Ingrese la altura en centímetros:"));

    if (sexo === "X" || edad === 0 || altura === 0) {
        break;
    }

    if (sexo === "M" && edad > 25) {
        mujeresMayores25++;
        acumuladoEdadesMujeres += edad;
    }

    if (sexo === "H" && edad < 18) {
        hombresMenores18++;
    }

    if (sexo === "H") {
        acumuladoAlturasHombres += altura;
    }

    if (edad < menorEdad) {
        menorEdad = edad;
    }
    if (altura > mayorAltura) {
        mayorAltura = altura;
    }
}

var promedioEdadMujeres = acumuladoEdadesMujeres / mujeresMayores25;
var promedioAlturaHombres = acumuladoAlturasHombres / hombresMenores18;

console.log("Porcentaje de mujeres mayores a 25 años: " + ((mujeresMayores25 / (mujeresMayores25 + hombresMenores18)) * 100).toFixed(2) + "%");
console.log("Porcentaje de hombres menores de 18 años: " + ((hombresMenores18 / (mujeresMayores25 + hombresMenores18)) * 100).toFixed(2) + "%");
console.log("Promedio de edad de las mujeres mayores a 25 años: " + promedioEdadMujeres.toFixed(2));
console.log("Promedio de altura de los hombres menores de 18 años: " + promedioAlturaHombres.toFixed(2));
console.log("Menor edad ingresada: " + menorEdad);
console.log("Mayor altura ingresada: " + mayorAltura);
