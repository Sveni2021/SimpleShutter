const container = document.getElementById('container');

let xPosition = 0;

const engineTimer = setInterval(() => {
    container.style.left = `${xPosition}px`;
    xPosition += 4;
}, 30);

setTimeout(() => {
    clearInterval(engineTimer);
}, 5000);