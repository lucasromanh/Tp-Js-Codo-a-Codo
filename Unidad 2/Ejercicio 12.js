var valorHora = parseFloat(prompt("Ingrese el valor de la hora de trabajo:"));
var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));

var sueldo = valorHora * horasTrabajadas;

console.log("El sueldo mensual del empleado es: $" + sueldo);
