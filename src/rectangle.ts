export{}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
const rectWidth = 400
const rectHeight = 200
const x = xCenter - (width / 2)
const y = yCenter - (height / 2)

ctx.fillStyle = "red"
ctx.fillRect(x, y, width, height);