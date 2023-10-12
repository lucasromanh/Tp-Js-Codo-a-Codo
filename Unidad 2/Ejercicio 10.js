var diametro = parseFloat(prompt("Ingrese el diámetro del círculo:"));

var radio = diametro / 2;
var perimetro = 2 * Math.PI * radio;
var area = Math.PI * Math.pow(radio, 2);

console.log("El perímetro del círculo es: " + perimetro);
console.log("El área del círculo es: " + area);
