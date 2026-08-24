export class ShapeViewerImpl {
    constructor(canvasElement) {
        this.ctx = canvasElement.getContext("2d");
        this.shapes = [];
    }
    addShapes(shapes) {
        this.shapes.push(...shapes);
        this.draw();
    }
    addShape(shape) {
        this.shapes.push(shape);
        this.draw();
    }
    draw() {
        this.shapes.forEach(shape => shape.draw(this.ctx));
    }
    toString() {
        let result = " ShapeViewer with shapes:\n";
        this.shapes.forEach(shape => result += shape.toString() + "\n");
        return result;
    }
}
//# sourceMappingURL=shape-viewer.js.map