const bullet = document.getElementById('bullet');
const bullet2 = document.getElementById('bullet2');
const bullet3 = document.getElementById('bullet3');
let xPosition = 559;
let xPosition2 = 473;
let xPosition3 = 387;
let speed = 10;

const engineTimer = setInterval(() => {
    bullet.style.left = `${xPosition}px`;
    bullet2.style.left = `${xPosition2}px`;
    bullet3.style.left = `${xPosition3}px`;
    xPosition += speed;
    xPosition2 += speed;
    xPosition3 += speed;

    if (xPosition === 946 || xPosition > 946 && xPosition < 946 + 10) {
        xPosition = 559;
    } else if (xPosition2 === 946 || xPosition2 > 946 && xPosition2 < 946 + 10) {
        xPosition2 = 559;
    } else if (xPosition3 === 946 || xPosition3 > 946 && xPosition3 < 946 + 10) {
        xPosition3 = 559;
    }
}, 20);


