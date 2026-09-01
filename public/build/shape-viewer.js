export class ShapeViewerImpl {
    /**
     * Creates new ShapeViewerImpl for the canvas
     */
    constructor(canvasElement) {
        this.ctx = canvasElement.getContext("2d");
        this.shapes = [];
    }
    /**
     * Adds multiple shapes
     * @param shapes shapes to add
     */
    addShapes(shapes) {
        this.shapes.push(...shapes);
        this.draw();
    }
    /**
     * Adds a single shape
     * @param shape shape to add
     */
    addShape(shape) {
        this.shapes.push(shape);
        this.draw();
    }
    getShapeAt(x, y) {
    }
    selectShape(shape) {
    }
    clearSelection() {
    }
    draw() {
        this.shapes.forEach(shape => shape.draw(this.ctx));
    }
    /**
     * Returns string representation of the shape viewer
     * @returns string containing the shapes
     */
    toString() {
        let result = " ShapeViewer with shapes:\n";
        this.shapes.forEach(shape => result += shape.toString() + "\n");
        return result;
    }
}
//# sourceMappingURL=shape-viewer.js.map