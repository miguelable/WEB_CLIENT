const textPage = document.getElementById('textShadow');
const imagePage = document.getElementById('imageShadow');
const enterInfo1 = document.getElementById('enterInfo1');
const exitInfo1 = document.getElementById('exitInfo1');

let imageContainer = document.getElementById('contentImage');
let textContainer = document.getElementById('contentText');

function changeTextBackground() {
    imagePage.style.backgroundColor = 'transparent';
    textPage.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    textContainer.style.display = 'flex';
    imageContainer.style.display = 'none';

}

function changeImageBackground() {
    textPage.style.backgroundColor = 'transparent';
    imagePage.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    textContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
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

function showInfo() {
    document.getElementById('file1Info').style.display = 'flex';
    document.getElementById('file1Main').style.display = 'none';
}

function hideInfo() {
    document.getElementById('file1Info').style.display = 'none';
    document.getElementById('file1Main').style.display = 'flex';
}

enterInfo1.addEventListener('click', showInfo);
exitInfo1.addEventListener('click', hideInfo);