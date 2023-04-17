let x = 100;
let y = 200;
let width = 50;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
let counter = 1;
function draw() {
    x += 1;
    y -= 3 * Math.sin(counter / 5);

    clear();
    circle(x, y, width);
    ++counter;
    // drawGrid(canvasWidth, canvasHeight);
}
