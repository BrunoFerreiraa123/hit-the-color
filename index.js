import { drawColors, drawPositions } from "./modules/draw.js";

const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const modal = document.getElementById('modal');

const restart = document.getElementById('restart');

const firstBox = document.getElementById('first-box');
const secondBox = document.getElementById('second-box');
const thirdBox = document.getElementById('third-box');
const fourthBox = document.getElementById('fourth-box');
const fifthBox = document.getElementById('fifth-box');
const sixthBox = document.getElementById('sixth-box');

const lineControler = document.getElementById('controlers');

let acertos = [];
let erros = [];

window.onload = () => {
    drawColors();
    drawPositions();
    checkAswer()
}

restart.addEventListener('click', () => {
    location.reload()
});

document.getElementById('button-modal').addEventListener('click', () => {
    resetStyles();
    drawColors();
    drawPositions();
});

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
