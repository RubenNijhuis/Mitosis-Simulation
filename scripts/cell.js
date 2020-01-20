let size = 25;

window.innerWidth < 450 ? (size = 15) : (size = 25);

class Cell {
    // The constructor declares the postion, the radius and the color of the cell
    constructor(givenPosition, givenRadius, givenCellColor) {
        let boundaryWidth = random(width / 10 * 1, width / 10 * 9)
        let boundaryHeight = random(height / 10 * 1, height / 10 * 9)
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.position = givenPosition
            ? givenPosition.copy()
            : createVector(boundaryWidth, boundaryHeight);
        this.maxspeed = 0.075;
        this.radius = givenRadius || size;
        this.cellColor =
            givenCellColor ||
            color(random(100, 255), 0, random(100, 255), random(200, 250));
    }

    // Adds a random velocity to the position of the cell
    move(frame) {
        this.position.add(this.velocity);

        this.velocity.add(this.acceleration);
        // Limit speed
        this.velocity.limit(this.maxspeed);
        // Reset accelertion to 0 each cycle
        this.acceleration.mult(0);
    }

    // Shows the cells new position and radius and fill it with its parents color
    show() {
        fill(this.cellColor);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }

    // If the cell is clicked it will return a boolean which will determine later if it should 'mitosis'
    clicked(givenX, givenY) {
        return (
            dist(this.position.x, this.position.y, givenX, givenY) < this.radius
        );
    }

    /*
      The mitosis function return
      a new Cell which will have a
      position offset from a random
      -5px to 5px
    */
    mitosis() {
        this.position.x += random(-7.5, 7.5);
        return new Cell(this.position, this.radius * 0.8, this.cellColor);
    }
}
