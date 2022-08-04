import arrCards from "./cardsArray.js";

const title = document.getElementById('color');

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
    arrCards[0].style.backgroundColor = "rgb(" + drawRGB() + ")";
    arrCards[1].style.backgroundColor = "rgb(" + drawRGB() + ")";
    arrCards[2].style.backgroundColor = "rgb(" + drawRGB() + ")";
    arrCards[3].style.backgroundColor = "rgb(" + drawRGB() + ")";
    arrCards[4].style.backgroundColor = "rgb(" + drawRGB() + ")";
    arrCards[5].style.backgroundColor = "rgb(" + drawRGB() + ")";
}

export {drawColors, drawPositions};