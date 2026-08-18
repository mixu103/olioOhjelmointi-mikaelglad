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
export class Rectangle {
    constructor(x, y, width, height, style) {
        this.location = new Point(x, y);
        this.size = new Size(width, height);
        this.style = style;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height);
    }
}
export class Circle {
    constructor(x, y, radius, style) {
        this.center = new Point(x, y);
        this.radius = radius;
        this.style = style;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
//# sourceMappingURL=shapes.js.map