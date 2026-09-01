class Point {
    /**
     *
     * @param x the x coordinate of the newly created point
     * @param y the y coordinate of the newly created point
     */
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
    /**
     *
     * @returns this point in string format
     */
    toString() {
        return `(${this._x}, ${this._y})`;
    }
}
class Size {
    /**
     * Creates a new Size with the width and height
     * @param width width is widt
     * @param height height is height
     */
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    /**
     * Gets the width
     */
    get width() {
        return this._width;
    }
    /**
     * Gets the height
     */
    get height() {
        return this._height;
    }
    /**
     * String of the Size
     */
    toString() {
        return `(${this._width}, ${this._height})`;
    }
}
export class BaseShape {
    /**
     * Functionality for shapes
     */
    static init(x, y) {
        throw Error("Implement this method");
    }
    /**
     *
     * @param style style used to draw shape
     */
    constructor(style) {
        this._style = style;
    }
    get style() {
        return this._style;
    }
    set style(style) {
        this._style = style;
    }
    /**
     *
     * @returns style of the shape
     */
    toString() {
        return `Shape with style ${this.style}`;
    }
}
export class Rectangle extends BaseShape {
    /**
     *  rectangle draw on canvas
     */
    static initWithXY(x, y) {
        return new Rectangle(x, y, 100, 100, "gray");
    }
    /**
     *
     * @param x x coordinate
     * @param y y coordinate
     * @param width width
     * @param height height
     * @param style style used
     */
    constructor(x, y, width, height, style) {
        super(style);
        this.location = new Point(x, y);
        this.size = new Size(width, height);
        this.style = style;
    }
    /**
     *
     * @param ctx canvas rendering used to draw
     */
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height);
    }
    toString() {
        return `Rectangle with location ${this.location.toString()}, size ${this.size.toString()} and style ${super.toString()}`;
    }
}
export class Square extends Rectangle {
    /**
  * Creates a new square with the specified position, side length and style.
  * @param x the X coordinate of the square.
  * @param y the Y coordinate of the square.
  * @param side the length of each side of the square.
  * @param style the style used to draw the square.
  */
    constructor(x, y, side, style) {
        super(x, y, side, side, style);
    }
    /**
     * Returns a string representation of the square.
     * @returns a string describing the square.
     */
    toString() {
        return `Square with style ${this.style}`;
    }
}
export class Circle extends BaseShape {
    /**
     * Circle draw on canvas
     */
    static initWithXY(x, y) {
        return new Circle(x, y, 50, "gray");
    }
    /**
     *
     * @param x x coordinate
     * @param y  x coordinate
     * @param radius radius of the circle
     * @param style style of the circle
     */
    constructor(x, y, radius, style) {
        super(style);
        this.center = new Point(x, y);
        this.radius = radius;
    }
    /**
     *
     * @param ctx ctx used to draw to canvas
     */
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    /**
     *
     * @returns Circle with center
     */
    toString() {
        return `Circle with center ${this.center.toString()}, radius ${this.radius} and style ${super.toString()}]`;
    }
}
//# sourceMappingURL=shapes.js.map