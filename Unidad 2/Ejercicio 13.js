var valorHora = parseFloat(prompt("Ingrese el valor de la hora de trabajo:"));
var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));
var antiguedad = parseInt(prompt("Ingrese los años de antigüedad en la empresa:"));

var sueldo = valorHora * horasTrabajadas;
var bonoAntiguedad = (sueldo * 0.15) * antiguedad;
sueldo += bonoAntiguedad;

console.log("El sueldo mensual del empleado es: $" + sueldo);
