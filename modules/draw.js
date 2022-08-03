const firstBox = document.getElementById('first-box');
const secondBox = document.getElementById('second-box');
const thirdBox = document.getElementById('third-box');
const fourthBox = document.getElementById('fourth-box');
const fifthBox = document.getElementById('fifth-box');
const sixthBox = document.getElementById('sixth-box');

const title = document.getElementById('color');

const arrCards = [firstBox, secondBox, thirdBox, fourthBox, fifthBox, sixthBox];

function drawRGB() {
    let par1, par2, par3;
    let rgbArray = [par1, par2, par3];

    for (let i = 0; i < 3; i++) {
        rgbArray[i] = Math.floor(Math.random() * 256);
    }

    TitleColor(rgbArray);
    let valuesFormated = rgbArray.join(',');

    return valuesFormated;
}

function drawPositions() {
    for (let i = 0; i < arrCards.length; i++) {
        let ramdomPos = Math.floor(Math.random() * 7);
        arrCards[i].style.order = ramdomPos;
    }
}

function TitleColor(parameter) {
    title.innerText = `RGB(${parameter[0]}, ${parameter[1]}, ${parameter[2]})`;
}

function drawColors() {
    firstBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    secondBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    thirdBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    fourthBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    fifthBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
    sixthBox.style.backgroundColor = "rgb(" + drawRGB() + ")";
}

export {drawColors, drawPositions};