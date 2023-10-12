var categoria = parseInt(prompt("Ingrese la categoría (1, 2 o 3):"));
var horasExtras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas:"));

var sueldoBasico;
switch (categoria) {
    case 1:
        sueldoBasico = 2000;
        break;
    case 2:
        sueldoBasico = 3000;
        break;
    case 3:
        sueldoBasico = 4000;
        break;
    default:
        console.log("Categoría no válida.");
        break;
}

var sueldo = sueldoBasico;
if (categoria === 1 && horasExtras > 20) {
    sueldo += 500;
} else if (categoria === 3 && horasExtras > 30) {
    sueldo += 1000;
}
if (sueldo > 4000) {
    console.log("El sueldo mensual del empleado es: $" + sueldo + " (supera los $4000)");
} else {
    console.log("El sueldo mensual del empleado es: $" + sueldo + " (no supera los $4000)");
}
