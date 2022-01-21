class Cell {
    constructor(x, y, d, color, stroke) {
        this.x = x;
        this.y = y;

        this.velocity = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
        };
        this.diameter = d;
        this.color = color;
        this.stroke = stroke;
        this.lineWidth = 5 * (this.diameter / 40);
        this.maxD = 60;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.diameter, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    update() {
        if (this.x + this.diameter > canvas.width || this.x - this.diameter < 0) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y + this.diameter > canvas.height || this.y - this.diameter < 0) {
            this.velocity.y = -this.velocity.y;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.draw();
    }

    mitosis() {
        this.x += randomIntFromRange(-this.diameter / 3, this.diameter / 3);
        this.y += randomIntFromRange(-this.diameter / 3, this.diameter / 3);
        let r2 = ((Math.PI * (this.diameter / 2) ** 2) / 2 / Math.PI) ** (1 / 2) * 2;

        return new Cell(this.x, this.y, r2, this.color);
    }
}
