export class Rectangle {
    constructor(width, height, x, y, style) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.style = style;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
export class Circle {
    constructor(x, y, radius, style) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.style = style;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
//# sourceMappingURL=shapes.js.map