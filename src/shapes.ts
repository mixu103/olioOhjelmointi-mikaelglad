export class Rectangle {

    width: number

    height: number

    x: number

    y: number

    style: string

    draw(ctx: CanvasRenderingContext2D) => void {
        ctx.fillStyle = this.style
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}