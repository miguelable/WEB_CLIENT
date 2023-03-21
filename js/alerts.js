const inputName = document.querySelector('#nameFile');
const exit = document.querySelector('.closeAlert');

var isTextEditor = sessionStorage.getItem("isText");
var isImageEditor = sessionStorage.getItem("isImage");

//comprobar si la pantalla se había abierto o si se abre nueva
if (window.location.pathname == "/html/imageEditor.html" && isImageEditor == "true") {
    document.querySelector('.alert').style.display = 'none';
} else if (window.location.pathname == "/html/textEditor.html" && isTextEditor == "true") {
    document.querySelector('.alert').style.display = 'none';
} else { //en el caso de no estar abierto anteriormente mostrar la alerta y poner la variable correspondiente en true
    if (window.location.pathname == '/html/imageEditor.html') {
        sessionStorage.setItem("isImage", "true");
    }
    if (window.location.pathname == '/html/textEditor.html') {
        sessionStorage.setItem("isText", "true");
    }
}


inputName.addEventListener('input', (event) => {
    console.log(event.target.textLength);
    if (inputName.value.length > 0) {
        inputName.style.border = '2px solid rgba(255, 0, 0, 0)';
        // añadir el comprobar a ver si el nombre está en la lista de documentos.
        // si coincide con alguno entonces mostramos el texto en rojo de lo que pasa.
        document.getElementById('repeatName').style.display = 'block';
    } else {
        inputName.style.border = '2px solid rgba(255, 0, 0, 255)';
    }
});

function exitFunction() {
    // Eliminar la alerta
    // guardar la imagen 
    document.querySelector('.alert').style.display = 'none';
}

exit.addEventListener('click', exitFunction);