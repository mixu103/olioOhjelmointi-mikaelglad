import { Rectangle } from "./shapes.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
const rectangle = new Rectangle(400, 200, xCenter - 200, yCenter - 100, "red");
rectangle.draw(ctx);
const rectangle2 = new Rectangle(200, 100, xCenter - 50, yCenter - 25, "green");
rectangle2.draw(ctx);
const rectangle3 = new Rectangle(50, 100, xCenter + 150, yCenter + 200, "purple");
rectangle3.draw(ctx);
// ympyrä jutut
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
//# sourceMappingURL=shapes-demo-oop.js.map