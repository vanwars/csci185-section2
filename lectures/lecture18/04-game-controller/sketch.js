let x = 200;
let y = 200;
let width = 150;
let fillColor = 'hotpink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    //noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.code === 'ArrowUp') {
        y = y - 10;
    } else if (ev.code === 'ArrowDown') {
        y = y + 10;
    } else if (ev.code === 'ArrowLeft') {
        x = x - 10;
    } else if (ev.code === 'ArrowRight') {
        x = x + 10;
    } else if (ev.code === 'Space') {
        width = width + 10;
    } else if (ev.code === 'Minus') {
        width = width - 10;
    } else if (ev.code === 'KeyR') {
        fillColor = 'red';
    } else if (ev.code === 'KeyB') {
        fillColor = 'blue';
    }

    // redraw circle:
    clear();
    fill(fillColor);
    //noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
