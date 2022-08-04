import arrCards from "./cardsArray.js";

const lineControler = document.getElementById('controlers');
const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const modal = document.getElementById('modal');
const restart = document.getElementById('restart');

let acertos = [];
let erros = [];

function corret() {
    acertos.push('acertou')
    showAcertos();
    lineControler.style.backgroundColor = 'rgb(56, 228, 79)';
    body.style.backgroundColor = arrCards[5].style.backgroundColor;
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

export {corret, wrong, resetStyles};