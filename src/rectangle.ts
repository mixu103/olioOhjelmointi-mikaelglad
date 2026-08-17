export{}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
const rectWidth: number = 400
const rectHeight: number = 200
const x: number = xCenter - (rectWidth / 2)
const y: number = yCenter - (rectHeight / 2)

ctx.fillStyle = "red"
ctx.fillRect(x, y, rectWidth, rectHeight)