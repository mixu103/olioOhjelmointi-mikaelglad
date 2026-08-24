class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    toString() {
        return `(${this.width}, ${this.height})`;
    }
}
export class BaseShape {
    constructor(style) {
        this.style = style;
    }
    toString() {
        return `Shape with style ${this.style}`;
    }
}
export class Rectangle extends BaseShape {
    constructor(x, y, width, height, style) {
        super(style);
        this.location = new Point(x, y);
        this.size = new Size(width, height);
        this.style = style;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height);
        super.toString();
    }
    toString() {
        return `Rectangle with location ${this.location.toString}, radius ${this.size.toString} and style ${super.toString()}]`;
    }
}
export class Circle extends BaseShape {
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
        return `Circle with center ${this.center.toString}, radius ${this.radius} and style ${super.toString()}]`;
    }
}
//# sourceMappingURL=shapes.js.map