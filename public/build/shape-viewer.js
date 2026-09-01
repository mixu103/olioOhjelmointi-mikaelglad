export class ShapeViewerImpl {
    /**
     * Creates new ShapeViewerImpl for the canvas
     */
    constructor(canvasElement) {
        this._canvas = canvasElement;
        const context = canvasElement.getContext("2d");
        if (!context) {
            throw new Error("Canvas context is not available");
        }
        this.ctx = context;
        this._shapes = [];
        this._selectedShape = null;
    }
    /**
     * Adds multiple shapes
     * @param shapes shapes to add
     */
    addShapes(shapes) {
        this._shapes.push(...shapes);
        this.draw();
    }
    /**
     * Adds a single shape
     * @param shape shape to add
     */
    addShape(shape) {
        this._shapes.push(shape);
        this.draw();
    }
    getShapeAt(x, y) {
        for (const shape of this._shapes) {
            if (this.ctx.isPointInPath(shape.path, x, y)) {
                return shape;
            }
        }
        return null;
    }
    selectShape(shape) {
        this._selectedShape = shape;
        this.draw();
    }
    clearSelection() {
        this.selectShape(null);
    }
    toString() {
        return `ShapeViewer with ${this._shapes.length} shapes`;
    }
    draw() {
        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._shapes.forEach(shape => {
            this.ctx.save();
            shape.draw(this.ctx);
            if (shape === this._selectedShape) {
                shape.drawSelectionBorder(this.ctx);
            }
            this.ctx.restore();
        });
    }
}
//# sourceMappingURL=shape-viewer.js.map