const textPage = document.getElementById('textShadow');
const imagePage = document.getElementById('imageShadow');

let imageContainer = document.getElementById('contentImage');
let textContainer = document.getElementById('contentText');

function changeTextBackground() {
    imagePage.style.backgroundColor = 'transparent';
    textPage.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    textContainer.style.display = 'block';
    imageContainer.style.display = 'none';

}

function changeImageBackground() {
    textPage.style.backgroundColor = 'transparent';
    imagePage.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    textContainer.style.display = 'none';
    imageContainer.style.display = 'block';
}

function insertFiles() {
    console.log("añadiendo ficheros de texto");
}

function changeTextPage() {
    changeTextBackground();
    insertFiles();
}

function changeImagePage() {
    changeImageBackground();
    insertFiles();
}

textPage.addEventListener('click', changeTextPage);
imagePage.addEventListener('click', changeImagePage);