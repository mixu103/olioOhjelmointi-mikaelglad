class Point {

    /**
     * Defines a location on a 2d plane
     */
    private _x: number

    private _y: number

    /**
     * 
     * @param x the x coordinate of the newly created point
     * @param y the y coordinate of the newly created point
     */
    public constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }


    /**
     * 
     * @returns this point in string format
     */
    public toString(): string {
        return `(${this._x}, ${this._y})`
    }
}


class Size {
    /**
     * width and height of the Size
     */
    private _width: number

    private _height: number

    /**
     * Creates a new Size with the width and height
     * @param width width is widt
     * @param height height is height
     */
    public constructor(width: number, height: number) {
        this._width = width
        this._height = height
    }


    /**
     * Gets the width
     */
    public get width(): number {
        return this._width
    }

    /**
     * Gets the height
     */
    public get height(): number {
        return this._height
    }

    /** 
     * String of the Size
     */
    public toString(): string {
        return `(${this._width}, ${this._height})`
    }
}

export interface Shape {

    readonly path: Path2D

    /**
     * Draws shape
     * @param ctx canvasrendering context used for draw
     */
    draw(ctx: CanvasRenderingContext2D): void

    drawSelectionBorder(ctx: CanvasRenderingContext2D): void

    /**
     * String represantion
     */
    toString(): string
}


export abstract class BaseShape implements Shape {
/**
 * Functionality for shapes
 */

    public static init(x: number, y: number): Shape {
        throw Error("Implement this method")
    }

    private _style: string

    /**
     * 
     * @param style style used to draw shape
     */
    public constructor(style: string) {
        this._style = style
    }

    public get style(): string {
        return this._style
    }

    public set style(style: string) {
        this._style = style
    }

    public get path(): Path2D {
        const path = new Path2D()

        this.setupPath(path)

        return path
    }

    protected abstract setupPath(path: Path2D): void

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.style
        ctx.fill(this.path)
    }

    public drawSelectionBorder(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.stroke(this.path)
    }

    /**
     * 
     * @returns style of the shape
     */
    public toString(): string {
        return `Shape with style ${this.style}`
    }
}





export class Rectangle extends BaseShape {
/**
 *  rectangle draw on canvas
 */

    public static initWithXY(x: number, y: number): Shape {
        return new Rectangle(x, y, 100, 100, "gray")
    }


    private location: Point

    private size: Size
  /**
   * 
   * @param x x coordinate
   * @param y y coordinate
   * @param width width
   * @param height height
   * @param style style used
   */
    public constructor(x: number, y: number,  width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
        this.style = style
    }

    /**
     * 
     * @param ctx canvas rendering used to draw
     */


    protected setupPath(path: Path2D): void {
        path.rect(this.location.x, this.location.y, this.size.width, this.size.height)
    }

   public override toString(): string {
    return `Rectangle with location ${this.location.toString()}, size ${this.size.toString()} and style ${super.toString()}`
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
    public constructor(
        x: number,
        y: number,
        side: number,
        style: string
    ) {
        super(x, y, side, side, style)
    }

    /**
     * Returns a string representation of the square.
     * @returns a string describing the square.
     */
    public override toString(): string {
        return `Square with style ${this.style}`
    }
}

export class Circle extends BaseShape {
/**
 * Circle draw on canvas
 */

    public static initWithXY(x: number, y: number): Shape {
        return new Circle(x, y, 50, "gray")
    }

    private center: Point

    public radius: number

    /**
     * 
     * @param x x coordinate
     * @param y  x coordinate
     * @param radius radius of the circle
     * @param style style of the circle
     */
    public constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }


    /**
     * 
     * @param path This is updated instead of using draw
     */
    protected setupPath(path: Path2D): void {
        path.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
    }

    /**
     * 
     * @returns Circle with center
     */
    public override toString(): string {
        return `Circle with center ${this.center.toString()}, radius ${this.radius} and style ${super.toString()}]`
    }
}