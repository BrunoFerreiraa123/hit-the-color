"use strict";

const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const modal = document.getElementById('modal');

const title = document.getElementById('color');
const restart = document.getElementById('restart');

const firstBox = document.getElementById('first-box');
const secondBox = document.getElementById('second-box');
const thirdBox = document.getElementById('third-box');
const fourthBox = document.getElementById('fourth-box');
const fifthBox = document.getElementById('fifth-box');
const sixthBox = document.getElementById('sixth-box');

const lineControler = document.getElementById('controlers');
const arrCards = [firstBox, secondBox, thirdBox, fourthBox, fifthBox, sixthBox]

let acertos = [];
let erros = [];

window.onload = () => {
    drawColors();
    drawPositions();
    checkAswer()
}

restart.addEventListener('click', () => {
    location.reload()
})

document.getElementById('button-modal').addEventListener('click', () => {
    resetStyles();
    drawColors();
    drawPositions();
})

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

function checkAswer() {
    document.addEventListener('click', e => {
        if (targetCheck(e)) {
            lineControler.style.backgroundColor = "rgb(240, 240, 240)"
            if (e.target === sixthBox) {
                corret()
            }
            else {
                resetStyles();
                setTimeout(wrong, 300)
                
            }
        } else {
            return;
        }
    })
}

function targetCheck(e) {
    return (e.target === firstBox || e.target === secondBox ||
        e.target === thirdBox || e.target === fourthBox ||
        e.target === fifthBox || e.target === sixthBox)
        ? true : false;
}

function corret() {
    acertos.push('acertou')
    showAcertos();
    lineControler.style.backgroundColor = 'rgb(56, 228, 79)';
    body.style.backgroundColor = sixthBox.style.backgroundColor;
    main.style.pointerEvents = 'none';

    modal.style.display = 'flex';
    restart.style.backgroundColor = "rgb(240,240,240)";
    restart.style.color = "rgb(56,228,56)";
}

function wrong() {
    erros.push('errou');
    showErros();
    lineControler.style.backgroundColor = 'rgb(228, 56, 56)';
    restart.style.backgroundColor = "rgb(240,240,240)";
    restart.style.color = "rgb(228,56,56)";
}

function showAcertos() {
    document.getElementById('acertos').
        innerText = ` ${acertos.length}`;
}

function showErros() {
    document.getElementById('erros').
        innerText = ` ${erros.length}`;
}

function resetStyles() {
    lineControler.style.backgroundColor = "rgb(240, 240, 240)";
    modal.style.display = "none";
    main.style.pointerEvents = 'auto';
    body.style.backgroundColor = '#69A2B0'
    restart.style.color = "#69A2B0";
    restart.style.backgroundColor = "#FFCAB1";
}
