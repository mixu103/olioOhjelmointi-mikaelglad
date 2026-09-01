"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Canvas context is not available");
}
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
const rectWidth = 400;
const rectHeight = 200;
const x = xCenter - (rectWidth / 2);
const y = yCenter - (rectHeight / 2);
ctx.fillStyle = "red";
ctx.fillRect(x, y, rectWidth, rectHeight);
//# sourceMappingURL=rectangle.js.map