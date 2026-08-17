const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
const circle = {
    x: 200,
    y: 200,
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
//# sourceMappingURL=circle.js.map