import { ShapeViewerImpl } from "./shape-viewer.js";
import { Circle, Rectangle, Square } from "./shapes.js";
const shapeViewer = new ShapeViewerImpl(document.getElementById("canvas"));
shapeViewer.addShapes([
    new Rectangle(100, 100, 200, 150, "red"),
    new Rectangle(300, 300, 150, 100, "green"),
    new Rectangle(500, 200, 100, 200, "pink"),
    new Circle(200, 400, 50, "blue"),
    new Circle(400, 100, 75, "orange"),
    new Circle(600, 400, 100, "purple"),
    new Square(700, 300, 100, "orange")
]);
console.log(shapeViewer.toString());
//# sourceMappingURL=shape-viewer-demo.js.map