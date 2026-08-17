const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
// Piirto
function drawRectangle(rect, style) {
    ctx.fillStyle = style;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}
const rectangle1 = {
    width: 400,
    height: 200,
    x: xCenter - 200,
    y: yCenter - 100,
    style: "red",
    draw: function () {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};
rectangle1.draw();
const rectangle2 = {
    width: 400,
    height: 200,
    x: xCenter - 50,
    y: yCenter - 25,
    style: "green",
    draw: function () {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};
rectangle2.draw();
drawRectangle(rectangle2, "yellow");
const circle = {
    x: 100,
    y: 100,
    radius: 150,
    style: "blue",
    draw: function () {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
};
circle.draw();
export {};
//# sourceMappingURL=shapes-demo.js.map