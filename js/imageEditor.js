const areaImg = document.querySelectorAll(".box");
const colorInput = document.getElementById('paletteInput');
const svgImg = document.getElementById('paletteImage');
const paint = document.getElementById('paintBox');
const bucket = document.getElementById('bucketBox');
const erase = document.getElementById('eraseBox');
const save = document.getElementById('saveBox');
let colorChosen;
let isPaint = false;
let isBucket = false;
let isErase = false;
let boxes = Array.from(areaImg);

var isImageEditor = sessionStorage.getItem("isImage");
var colorData = JSON.parse(sessionStorage.getItem('colors')) || [];

//comprobar si la pantalla se había abierto o si se abre nueva
if (isImageEditor == "true") {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colorData[i];
    }
}


// Funcion que va recorriendo las celdas adyacentes y las pinta del color establecido
function pintarArea(x, y, nuevoColor) {
    let colorOriginal = boxes[(x * 8) + y].style.backgroundColor;
    boxes[(x * 8) + y].style.backgroundColor = nuevoColor;

    // Recorrer las baldosas adyacentes del mismo color
    if (x > 0 && boxes[((x - 1) * 8) + y].style.backgroundColor === colorOriginal) {
        pintarArea(x - 1, y, nuevoColor);
    }
    if (x < 7 && boxes[((x + 1) * 8) + y].style.backgroundColor === colorOriginal) {
        pintarArea(x + 1, y, nuevoColor);
    }
    if (y > 0 && boxes[(x * 8) + (y - 1)].style.backgroundColor === colorOriginal) {
        pintarArea(x, y - 1, nuevoColor);
    }
    if (y < 7 && boxes[(x * 8) + (y + 1)].style.backgroundColor === colorOriginal) {
        pintarArea(x, y + 1, nuevoColor);
    }
}


boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        console.log(`Recuadro ${index + 1} ha sido pulsado`);
        if (isPaint) {
            box.style.backgroundColor = colorChosen;
        } else if (isBucket) {
            // Calculamos la posicion del grid como si fuera una matriz, así podemos identificar mejor los bordes.
            const row = Math.floor(index / 8);
            const col = index % 8;
            // llamamos a la funcion printArea que es una función recursiva.
            pintarArea(row, col, colorChosen);
        }
        //Extraer todo los colores del lienzo para guardarlos en la session
        let colors = boxes.map((colorBox) => {
            return colorBox.style.backgroundColor;
        });
        sessionStorage.setItem("colors", JSON.stringify(colors));
    });
});

colorInput.addEventListener('change', () => {
    console.log(`Color seleccionado: ${colorInput.value}`);
    svgImg.style.fill = colorInput.value;
    colorChosen = colorInput.value;
});

paint.addEventListener('click', function() {
    document.body.style.cursor = 'url(/img/Paint.cur), auto';
    isPaint = true;
    isBucket = false;
    isErase = false;
});

bucket.addEventListener('click', function() {
    document.body.style.cursor = 'url(/img/Bucket.cur), auto';
    isBucket = true;
    isPaint = false;
    isErase = false;
});

erase.addEventListener('click', function() {
    document.body.style.cursor = 'auto';
    areaImg.forEach((box, index) => {
        box.style.backgroundColor = "";
    });
    isErase = true;
    isPaint = false;
    isBucket = false;
    let colors = boxes.map((colorBox) => {
        return colorBox.style.backgroundColor;
    });
    sessionStorage.setItem("colors", JSON.stringify(colors));
});

save.addEventListener('click', function() {
    document.body.style.cursor = 'auto';
    isPaint = false;
    isBucket = false;
    isErase = false;
    //Extraer todo los colores del lienzo
    let colors = boxes.map((colorBox) => {
        return colorBox.style.backgroundColor;
    });
});