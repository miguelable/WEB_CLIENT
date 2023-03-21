let canvas = document.getElementById("memoryBar");
var ctx = canvas.getContext("2d");

// Definir los rangos
var min = 0;
var max = 1000;

// Definir el número a representar
var num = 30;

// Calcular el porcentaje de la barra que se debe rellenar
var percentage = (num - min) / (max - min);

// Definir el color de la barra
ctx.fillStyle = "#474747";

// Dibujar la barra
ctx.fillRect(0, 0, canvas.width * percentage, canvas.height);

var borderRadius = 10;

// Dibujar la barra con bordes redondeados

ctx.beginPath();
ctx.fill();