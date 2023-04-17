function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(400, 400, 'pink', 'purple');
    makeCreature(700, 100, 'hotpink');
    makeCreature(0, 400, '#956321', 'green');

    // for debugging:
    drawGrid(canvasWidth, canvasHeight);
}


function makeCreature(x, y, fillColor, eyeColor='black') {
    // your creature:
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor);
    ellipse(x - 50, y - 50, 30, 40);  // x, y, width, height
    ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, '#956321', 'green');
}

function mouseDragged() {
    makeCreature(mouseX, mouseY, 'hotpink', 'white');
}