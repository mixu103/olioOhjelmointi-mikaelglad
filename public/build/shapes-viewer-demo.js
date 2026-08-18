import { ShapeViewer } from "./shape-viewer.js";
import { Circle, Rectangle } from "./shapes.js";
const shapeViewer = new ShapeViewer(document.getElementById("canvas"));
shapeViewer.addShapes([
    new Rectangle(100, 100, 200, 150, "red"),
    new Rectangle(300, 300, 150, 100, "green"),
    new Rectangle(500, 200, 100, 200, "pink"),
    new Circle(200, 400, 50, "blue"),
    new Circle(400, 100, 75, "orange"),
    new Circle(600, 400, 100, "purple")
]);
console.log(shapeViewer.toString());
//# sourceMappingURL=shapes-viewer-demo.js.map