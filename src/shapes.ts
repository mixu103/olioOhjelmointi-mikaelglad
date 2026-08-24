class Point {
    x: number

    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    toString(): string {
        return `(${this.x}, ${this.y})`
    }
}


class Size {
    width: number

    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    toString(): string {
        return `(${this.width}, ${this.height})`
}

export interface Shape {
    
    draw(ctx: CanvasRenderingContext2D): void

    toString(): string
}

export abstract class BaseShape implements Shape {

    style: string

    constructor(style: string) {
        this.style = style
    }

    abstract draw(ctx: CanvasRenderingContext2D): void

    toString(): string {
        return `Shape with style ${this.style}`
    }
}



export class Rectangle extends BaseShape {

    location: Point

    size: Size
  

    constructor(x: number, y: number,  width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
        this.style = style
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.style
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
        super.toString()
    }

        toString(): string {
        return `Rectangle with location ${this.location.toString}, radius ${this.size.toString} and style ${super.toString()}]`
    }

}

export class Circle extends BaseShape {

    center: Point

    radius: number



    constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.style
        ctx.beginPath()
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    toString(): string {
        return `Circle with center ${this.center.toString}, radius ${this.radius} and style ${super.toString()}]`
    }
}