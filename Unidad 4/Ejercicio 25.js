var aprobados = 0;
var desaprobados = 0;
var sumaNotas = 0;

while (true) {
    var nota = parseFloat(prompt("Ingrese una nota (1 al 10), o 0 para finalizar:"));
    if (nota === 0) {
        break;
    }

    if (nota >= 1 && nota <= 10) {
        sumaNotas += nota;
        if (nota >= 4) {
            aprobados++;
        } else {
            desaprobados++;
        }
    } else {
        console.log("Nota no válida. Ingrese una nota entre 1 y 10.");
    }
}
var totalAlumnos = aprobados + desaprobados;
var porcentajeAprobados = (aprobados / totalAlumnos) * 100;
var porcentajeDesaprobados = (desaprobados / totalAlumnos) * 100;
var promedioNotas = sumaNotas / totalAlumnos;

console.log("Porcentaje de alumnos aprobados: " + porcentajeAprobados.toFixed(2) + "%");
console.log("Porcentaje de alumnos desaprobados: " + porcentajeDesaprobados.toFixed(2) + "%");
console.log("Promedio de las notas: " + promedioNotas.toFixed(2));
