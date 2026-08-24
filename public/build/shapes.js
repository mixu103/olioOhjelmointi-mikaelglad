class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    toString() {
        return `(${this._x}, ${this._y})`;
    }
}
class Size {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    toString() {
        return `(${this._width}, ${this._height})`;
    }
}
export class BaseShape {
    constructor(style) {
        this._style = style;
    }
    get style() {
        return this._style;
    }
    set style(style) {
        this._style = style;
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