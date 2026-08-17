export class Rectangle {

    width: number

    height: number

    x: number

    y: number

    style: string

    constructor(width: number, height: number, x: number, y: number, style: string) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.style = style
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.style
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

export class Circle {

    radius: number

    x: number

    y: number

    style: string

    constructor(x: number, y: number, radius: number, style: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.style = style
    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.style
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }
}