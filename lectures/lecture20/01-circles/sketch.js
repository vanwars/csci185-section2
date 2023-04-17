function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    /**
     * What is repeating:
     *  * circle function invocation, x, diameter
     * How many times:
     *  * 5 times
     * What is changing each time: 
     *  * y value
     */
    let y = 0;
    let w = 50;
    let x1 = 100;
    let x2 = 300;
    let x3 = 500;
    while (y <= 3000) {

        fill('teal')
        circle(x1, y, w);

        fill('pink')
        circle(x2, y, w);

        fill('lightblue')
        circle(x3, y, w);
        y += 5;
        w += 5;

        x1 *= 1.02;
        x2 -= 5;
        x3 /= -1.02;
        
    }

    // y = 0;
    // while (y <= 650) {
    //     circle(300, y, 50);
    //     y += 5;
    // }


    // drawGrid(canvasWidth, canvasHeight);
}
