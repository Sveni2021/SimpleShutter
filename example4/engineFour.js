const container = document.getElementById('container');
const leg1 = document.getElementById('leg1');
const leg2 = document.getElementById('leg2');
const leg3 = document.getElementById('leg3');
const leg4 = document.getElementById('leg4');
const bullet = document.getElementById('bullet');
let number = 0;
let yNumber = 0;
let xNumber = 0;
let count = 0;
let speed = 20;
let xPosition = 0;
let yPosition = 550;
let xPositionB = xPosition + 110;
let yPositionB = yPosition + 41;
let xPositionLeg1 = 40;
let xPositionLeg2 = 40;
let xPositionLeg3 = 40;
let xPositionLeg4 = 40;

//function which activated when  onclick on button "fire".
function fire() {
    number = 1;
}

//function which activated when  onclick on button "jump".
function jump() {
    yNumber++
}

//function which activated when  onclick on button "stop".
function stop() {
    xNumber = 0;
}

//function which activated when  onclick on button "left".
function left() {
    xNumber = -1;
}

//function which activated when  onclick on button "right".
function right() {
    xNumber = 1;
}

//Move human jump, go right and left.
const engineTimer = setInterval(() => {
    container.style.left = `${xPosition}px`;
    container.style.top = `${yPosition}px`;
    leg1.style.left = `${xPositionLeg1}px`;
    leg2.style.left = `${xPositionLeg2}px`;
    leg3.style.left = `${xPositionLeg3}px`;
    leg4.style.left = `${xPositionLeg4}px`;
    if (number === 0) {
        xPositionB = xPosition + 80;
        yPositionB = yPosition + 41;

    }
    if (yNumber === 1) {
        yPosition -= 50;
        if (yPosition === 450) {
            yPosition = 450;
            yNumber = 2;
        }
    }
    if (yNumber === 2) {
        yPosition += 50;
        if (yPosition >= 550) {
            yPosition = 550;
            yNumber = 0;
        }
    }
    if (count === 0) {
        if (xNumber === 1) {
            xPosition += speed;
        } else if (xNumber === -1) {
            xPosition -= speed;
        }
        if (xNumber === 1 || xNumber === -1) {
            xPositionLeg1 = 30;
            xPositionLeg2 = 50;
            xPositionLeg3 = 20;
            xPositionLeg4 = 60;
        }
    } else if (count === 1) {
        xPositionLeg1 = 40;
        xPositionLeg2 = 40;
        xPositionLeg3 = 40;
        xPositionLeg4 = 40;
    } else if (count === 2) {
        if (xNumber === 1) {
            xPosition += speed;
        } else if (xNumber === -1) {
            xPosition -= speed;
        }
        if (xNumber === 1 || xNumber === -1) {
            xPositionLeg1 = 50;
            xPositionLeg2 = 30;
            xPositionLeg3 = 60;
            xPositionLeg4 = 20;
        }
    } else if (count === 3) {
        xPositionLeg1 = 40;
        xPositionLeg2 = 40;
        xPositionLeg3 = 40;
        xPositionLeg4 = 40;
        count = -1;
        if (xNumber > 1) {
            xNumber = 1;
        } else if (xNumber < -1) {
            xNumber = -1;
        }
    }
    console.log(yNumber);
    count++;
}, 200);
//Move bullet.
const engineTimerTwo = setInterval(() => {
    bullet.style.left = `${xPositionB}px`;
    bullet.style.top = `${yPositionB}px`;
    if (number >= 1) {
        xPositionB += 10;
        yPositionB = yPositionB;
    }
    if (xPositionB >= 1600) {
        number = 0;
    }
}, 10);