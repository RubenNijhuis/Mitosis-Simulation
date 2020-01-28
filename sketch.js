const button = document.querySelector("button");
const overlay = document.querySelector("#overlay");
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const startCells = 10;
let totalCells = [];

const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

button.addEventListener("click", () => init());

overlay.addEventListener("click", (e) => {
    for (let i = totalCells.length - 1; i >= 0; i--) {
        if (distance(totalCells[i].x, totalCells[i].y, e.x, e.y) < totalCells[i].diameter) {
            totalCells.push(totalCells[i].mitosis());
            totalCells.push(totalCells[i].mitosis());
            totalCells.splice(i, 1);
            break;
        }
    }
});

const init = () => {
    totalCells = [];
    for (let i = 0; i < startCells; i++) {
        const radius = randomIntFromRange(80, 100);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(radius, canvas.height - radius);
        totalCells.push(new Cell(x, y, radius, `rgba(230, 199, 232, 0.75)`, `rgba(215, 119, 221)`));
    }
};

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "rgb(244, 237, 237)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    for (let cell of totalCells) {
        cell.update(totalCells);
    }
};

init();
animate();
