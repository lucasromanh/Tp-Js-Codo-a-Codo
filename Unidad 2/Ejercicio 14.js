var valorHora = parseFloat(prompt("Ingrese el valor de la hora de trabajo:"));
var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));
var antiguedad = parseInt(prompt("Ingrese los años de antigüedad en la empresa:"));
var segurosVendidos = parseInt(prompt("Ingrese la cantidad de seguros vendidos:"));
var valorSeguroMasCaro = parseFloat(prompt("Ingrese el valor del seguro más caro vendido:"));

var sueldo = valorHora * horasTrabajadas;
var bonoAntiguedad = (sueldo * 0.15) * antiguedad;
var bonoSeguros = (sueldo * 0.25) * segurosVendidos;
var bonoSeguroMasCaro = (valorSeguroMasCaro * 0.5);
sueldo += bonoAntiguedad + bonoSeguros + bonoSeguroMasCaro;


var valorPromedioHora = sueldo / horasTrabajadas;

console.log("El sueldo mensual del empleado es: $" + sueldo);
console.log("El valor promedio de la hora del empleado es: $" + valorPromedioHora);
