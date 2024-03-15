let gameContainer = document.querySelector('.sketch-container')

const rows = 16;
const collumns = 16;
for(let i = 0; i < rows; i++){
    for(let j = 0; j < collumns; j++){

        const ncell = document.createElement('div');
        ncell.classList.add("cell");

        gameContainer.appendChild(ncell);
    }
}

let cells = document.getElementsByClassName('cell');
let btnred = document.querySelector('.btn-red');
let btnblue = document.querySelector('.btn-blue');
let btngreen = document.querySelector('.btn-green');
let buttons = document.querySelector('.buttons');
let currentColor = 'red';
buttons.addEventListener('click', (event) =>{
    let target = event.target;
    let color;
    switch (target.className){
        case 'btn-red':
            color = 'red';
            break;
        case 'btn-blue':
            color = 'blue';
            break;
        case 'btn-green':
            color = 'green';
            break;
    }
    currentColor = color;
})

document.querySelector('.sketch-container').addEventListener('mouseover', (event)=>{
    event.target.style.backgroundColor = currentColor;
})
