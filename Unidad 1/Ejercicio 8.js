// Realice el algoritmo para calcular e informar el perímetro y el área del círculo. 
// Se considerará para este ejercicio que el valor de PI será 3.1416

var radio = parseFloat(prompt("Ingrese el radio del círculo:"));

var perimetro = 2 * Math.PI * radio;
var area = Math.PI * Math.pow(radio, 2);

console.log("El perímetro del círculo es: " + perimetro);
console.log("El área del círculo es: " + area);
