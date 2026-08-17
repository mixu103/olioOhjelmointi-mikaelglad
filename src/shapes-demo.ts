export {}

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2


interface Rectangle {
    width: number
    height: number
    x: number
    y: number
}

// Piirto
function drawRectangle(rect: Rectangle, style: string): void {
    ctx.fillStyle = style
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
}


const rectangle1: Rectangle = {
    width: 400,
    height: 200,
    x: xCenter - 200,
    y: yCenter - 100
}

const rectangle2: Rectangle = {
    width: 400,
    height: 200,
    x: xCenter - 50,
    y: yCenter - 25
}


drawRectangle(rectangle1, "red")
drawRectangle(rectangle2, "green")