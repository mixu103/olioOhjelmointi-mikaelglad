export{}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
const width = 400
const height = 200
const x2 = xCenter - (width / 2)
const y2 = yCenter - (height / 2)



const rectangle = {
    width: 400,
    height: 200,
    x: xCenter - 200,
    y: yCenter - 100
}



ctx.fillStyle = "red"
ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

const rectangle2 = {
    width: 400,
    height: 200,
    x: xCenter - 50,
    y: yCenter - 25
}


ctx.fillStyle = "green"
ctx.fillRect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);

function drawRectangle(rectangle: { width: number; height: number; x: number; y: number;}, style:string) {
    ctx.fillStyle = style
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}