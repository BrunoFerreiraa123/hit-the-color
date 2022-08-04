import { corret, wrong, resetStyles } from "./printAswer.js";
import arrCards from "./cardsArray.js";

const lineControler = document.getElementById('controlers');

function checkAswer() {
    document.addEventListener('click', e => {
        if (targetCheck(e)) {
            lineControler.style.backgroundColor = "rgb(240, 240, 240)"
            if (e.target === arrCards[5]) {
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
    return (e.target === arrCards[0] || e.target === arrCards[1] ||
        e.target === arrCards[2] || e.target === arrCards[3] ||
        e.target === arrCards[4] || e.target === arrCards[5])
        ? true : false;
}

export default checkAswer