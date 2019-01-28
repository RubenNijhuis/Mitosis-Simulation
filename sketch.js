const startCells = 5000;
let totalCells = [];

//Draws the canvas ands pushes cells to the array as many times as 'startCells' defines
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < startCells; i++) {
    totalCells.push(new Cell());
  }
}

// For each cell, run the class methods
function draw() {
  background(30);
  noStroke();
  totalCells.forEach(cell => {
    cell.move();
    cell.show();
  });
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
