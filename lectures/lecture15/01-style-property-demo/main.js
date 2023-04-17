
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = '#E71D36';
    document.querySelector('#section1').style.color = '#FFFFFF';
}

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = '#2E294E';
    document.querySelector('#section2').style.color = '#FFFFFF';
}

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = '#F28482';
    document.querySelector('#section3').style.color = '#FFFFFF';
}

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = '#F46036';
    document.querySelector('#section4').style.color = '#FFFFFF';
}

function clearScreen() {
    // your code here...
    console.log('Clear all sections (no bg, font color white)');

    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section1').style.color = 'black';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section2').style.color = 'black';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section3').style.color = 'black';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section4').style.color = 'black';
}

