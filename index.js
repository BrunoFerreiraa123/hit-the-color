import { drawColors, drawPositions } from "./modules/draw.js";
import checkAswer from "./modules/checkClick.js";
import { resetStyles } from "./modules/printAswer.js";

const restart = document.getElementById('restart');

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