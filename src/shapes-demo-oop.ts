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
    style: string
    draw: () => void
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
    y: yCenter - 100,
    style: "red",
    draw: function () {
        ctx.fillStyle = this.style
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

rectangle1.draw()

const rectangle2: Rectangle = {
    width: 400,
    height: 200,
    x: xCenter - 50,
    y: yCenter - 25,
    style: "green",
    draw: function () {
        ctx.fillStyle = this.style
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

rectangle2.draw()

drawRectangle(rectangle2, "yellow")

const circle = {
    x: 100,
    y: 100,
    radius: 150,
    style: "blue",
    draw: function(){
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


const rectangle3: Rectangle = {
    width: 50,
    height: 100,
    x: xCenter + 150,
    y: yCenter + 200,
    style: "purple",
    draw: function () {
        ctx.fillStyle = this.style
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

rectangle3.draw()


circle.draw()