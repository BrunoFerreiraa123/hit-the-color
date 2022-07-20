const title = document.getElementById('color');

let par1, par2, par3;

function drawValues() {
    let parametersArray = [par1, par2, par3];

    for(let i = 0; i < 3; i++) {
        parametersArray[i] = Math.floor(Math.random() * 256)
    }

    rgbTitle(parametersArray);
}

function rgbTitle(parameter) {
    title.innerText = `RGB(${parameter[0]}, ${parameter[1]}, ${parameter[2]})`
}



