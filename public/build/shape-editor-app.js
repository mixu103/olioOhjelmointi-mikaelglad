import { AddShapeAction, SelectAction } from "./shape-actions.js";
import { PaletteComponent } from "./shape-palette.js";
import { ShapeViewerImpl } from "./shape-viewer.js";
import { Circle, Rectangle } from "./shapes.js";
const canvas = document.getElementById("canvas");
const shapeViewer = new ShapeViewerImpl(canvas);
shapeViewer.addShape(new Rectangle(100, 100, 100, 100, "red"));
const paletteElement = document.getElementById("palette");
new PaletteComponent(paletteElement, [
    new SelectAction(shapeViewer),
    new AddShapeAction(Rectangle, shapeViewer),
    new AddShapeAction(Circle, shapeViewer),
]);
//# sourceMappingURL=shape-editor-app.js.map