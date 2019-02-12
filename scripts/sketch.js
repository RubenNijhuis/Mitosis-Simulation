// ye ol' vars (should speak for themselves)
const initCells = 25;
let totalCells = [];

/*
  Draws the canvas ands pushes
  cells to the array as many
  times as 'startCells' defines
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < initCells; i++) {
        totalCells.push(new Cell());
    }
}

/* For each cell, run the class methods move() and show() */
function draw() {
    background(30);
    noStroke();
    totalCells.forEach(cell => {
        cell.move();
        cell.show();
    });
}

// Resizes the canvas
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/*
  It is a backwards loop because,
  every new cell would be added to the end,
  which would mess up the iteration
*/
function mousePressed() {
    for (let i = totalCells.length - 1; i >= 0; i--) {
        if (totalCells[i].clicked(mouseX, mouseY)) {
            totalCells.push(totalCells[i].mitosis());
            totalCells.push(totalCells[i].mitosis());
            totalCells.splice(i, 1);
        }
    }
}
