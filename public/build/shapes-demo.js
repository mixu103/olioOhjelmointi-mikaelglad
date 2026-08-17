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
    y: yCenter - 100
};
const rectangle2 = {
    width: 400,
    height: 200,
    x: xCenter - 50,
    y: yCenter - 25
};
const circle = {
    x: 100,
    y: 100,
    radius: 150
};
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
drawRectangle(rectangle1, "red");
drawRectangle(rectangle2, "green");
export {};
//# sourceMappingURL=shapes-demo.js.map