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

    draw(ctx: CanvasRenderingContext2D) => void {
        ctx.fillStyle = this.style
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

export class Circle {

    radius: number

    x: number

    y: number

    style: string