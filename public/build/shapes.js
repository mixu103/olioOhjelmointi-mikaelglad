class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
export class Shape {
    constructor(style) {
        this.style = style;
    }
}
export class Rectangle extends Shape {
    constructor(x, y, width, height, style) {
        super(style);
        this.location = new Point(x, y);
        this.size = new Size(width, height);
        this.style = style;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height);
    }
    toString() {
        return `Rectangle with location ${this.location}, radius ${this.size} and style ${this.style}]`;
    }
}
export class Circle extends Shape {
    constructor(x, y, radius, style) {
        super(style);
        this.center = new Point(x, y);
        this.radius = radius;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    toString() {
        return `Circle with center ${this.center}, radius ${this.radius} and style ${this.style}]`;
    }
}
//# sourceMappingURL=shapes.js.map