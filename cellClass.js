class Cell {
	// The constructor declares the postion, the radius and the color of the cell
	constructor(givenPosition, givenRadius, givenCellColor) {
		this.position = givenPosition ? givenPosition.copy() : createVector(random(width), random(height));
		this.radius = givenRadius || 5;
		this.cellColor = givenCellColor || color(random(100, 255), 0, random(100, 255), random(200, 250));
	}

	// Adds a random velocity to the position of the cell
	move(){
		this.position.add(p5.Vector.random2D())
	}

	// Shows the cells new position and radius and fill it with its parents color
	show(){
		fill(this.cellColor);
		ellipse(this.position.x, this.position.y, this.radius * 2);
	}

	// If the cell is clicked it will return a boolean which will determine later if it should 'mitosis'
	clicked (givenX, givenY){ 
		return dist(this.position.x, this.position.y, givenX, givenY) < this.radius;
	}

	// The mitosis function return a new Cell which will have a position offset from '-5px to 5px'
	mitosis(){
		this.position.x += random(-5, 5);
		return new Cell(this.position, this.radius * 0.8, this.cellColor);;
	}
}
