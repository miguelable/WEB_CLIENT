const textContent = document.getElementById('textArea');
const textSize = document.getElementsByClassName('textSize');

var isTextEditor = sessionStorage.getItem("isText");
var textData = sessionStorage.getItem('text');
console.log(textData);

//comprobar si la pantalla se había abierto o si se abre nueva
if (isTextEditor == "true") {
    textContent.value = textData;
    textSize.innerHTML = textContent.textLength + ' bytes';
}

textContent.addEventListener('input', (event) => {
    const text = event.target.textLength;
    textSize.innerHTML = text + ' bytes';
    sessionStorage.setItem("text", textContent.value);
});