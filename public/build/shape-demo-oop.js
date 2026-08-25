import { Rectangle, Circle } from "./shapes.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const xCenter = canvas.width / 2;
const yCenter = canvas.height / 2;
const rectangle = new Rectangle(xCenter - 200, yCenter - 100, 400, 200, "red");
rectangle.draw(ctx);
const rectangle2 = new Rectangle(xCenter - 50, yCenter - 25, 200, 100, "green");
rectangle2.draw(ctx);
const rectangle3 = new Rectangle(xCenter + 150, yCenter + 200, 50, 100, "purple");
rectangle3.draw(ctx);
// ympyrä jutut
const circle = new Circle(150, 150, 100, "blue");
circle.draw(ctx);
const circle2 = new Circle(400, 400, 50, "orange");
circle2.draw(ctx);
circle2.style = "violet";
circle2.radius = 75;
circle2.draw(ctx);
//# sourceMappingURL=shape-demo-oop.js.map