const title = document.getElementById('color');
const firstBox = document.getElementById('first-box');
const secondBox = document.getElementById('second-box');
const thirdBox = document.getElementById('third-box');
const fourthBox = document.getElementById('fourth-box');
const fifthBox = document.getElementById('fifth-box');
const sixthBox = document.getElementById('sixth-box');

let par1, par2, par3;

function drawRGB() {
    let rgbPar = [par1, par2, par3];

    for (let i = 0; i < 3; i++) {
        rgbPar[i] = Math.floor(Math.random() * 256)
    }

    let valuesFormated = rgbPar.join(',')

    return(valuesFormated)
}

function rgbTitle(parameter) {
    title.innerText = `RGB(${parameter[0]}, ${parameter[1]}, ${parameter[2]})`
}

function drawColors() {
    firstBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    secondBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    thirdBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    thirdBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    fourthBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    fifthBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    sixthBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
}


drawRGB()
drawColors()
