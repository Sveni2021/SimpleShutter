const container = document.getElementById('container');
const leg1 = document.getElementById('leg1');
const leg2 = document.getElementById('leg2');
const leg3 = document.getElementById('leg3');
const leg4 = document.getElementById('leg4');
let yNumber = 0;
let number = 0;
let count = 0;
let speed = 20;
let xPosition = 0;
let yPosition = 550;
let xPositionLeg1 = 40;
let xPositionLeg2 = 40;
let xPositionLeg3 = 40;
let xPositionLeg4 = 40;

function jump() {
    yNumber++
}

function left() {
    number--
}

function right() {
    number++
}

const engineTimer = setInterval(() => {
    container.style.left = `${xPosition}px`;
    container.style.top = `${yPosition}px`;
    leg1.style.left = `${xPositionLeg1}px`;
    leg2.style.left = `${xPositionLeg2}px`;
    leg3.style.left = `${xPositionLeg3}px`;
    leg4.style.left = `${xPositionLeg4}px`;
    if (yNumber === 1) {
        yPosition -= 50;
        if (yPosition === 450) {
            yNumber = 2;
        }
    } else if (yNumber === 2) {
        yPosition += 50;
        if (yPosition === 550) {
            yNumber = 0;
        }
    }
    if (count === 0) {
        if (number === 1) {
            xPosition += speed;
            xPositionLeg1 = 30;
            xPositionLeg2 = 50;
            xPositionLeg3 = 20;
            xPositionLeg4 = 60;
        } else if (number === -1) {
            xPosition -= speed;
            xPositionLeg1 = 30;
            xPositionLeg2 = 50;
            xPositionLeg3 = 20;
            xPositionLeg4 = 60;
        } else if (number === 0) {
            xPosition = xPosition;
            xPositionLeg1 = 40;
            xPositionLeg2 = 40;
            xPositionLeg3 = 40;
            xPositionLeg4 = 40;
        }
    } else if (count === 1) {
        xPositionLeg1 = 40;
        xPositionLeg2 = 40;
        xPositionLeg3 = 40;
        xPositionLeg4 = 40;
    } else if (count === 2) {
        if (number === 1) {
            xPosition += speed;
            xPositionLeg1 = 50;
            xPositionLeg2 = 30;
            xPositionLeg3 = 60;
            xPositionLeg4 = 20;
        } else if (number === -1) {
            xPosition -= speed;
            xPositionLeg1 = 50;
            xPositionLeg2 = 30;
            xPositionLeg3 = 60;
            xPositionLeg4 = 20;
        } else if (number === 0) {
            xPositionLeg1 = 40;
            xPositionLeg2 = 40;
            xPositionLeg3 = 40;
            xPositionLeg4 = 40;
            xPosition = xPosition;
        }
    } else if (count === 3) {
        xPositionLeg1 = 40;
        xPositionLeg2 = 40;
        xPositionLeg3 = 40;
        xPositionLeg4 = 40;
        count = -1;
        if (number > 1) {
            number = 1;
        } else if (number < -1) {
            number = -1;
        }
    }
    console.log(number);
    count++;
}, 200);