export class ShapeSelectionEvent {
    constructor(shape) {
        this._shape = shape;
    }
    get shape() {
        return this._shape;
    }
}
export class ShapeViewerImpl {
    addSelectionListener(listener) {
        this._selectionListeners.push(listener);
    }
    fireSelectionEvent(e) {
        this._selectionListeners.forEach(listener => listener.shapeSelected(e));
    }
    /**
     * Creates new ShapeViewerImpl for the canvas
     */
    constructor(canvasElement) {
        this._canvas = canvasElement;
        const context = canvasElement.getContext("2d");
        if (!context) {
            throw new Error("Canvas context is not available");
        }
        this._ctx = context;
        this._shapes = [];
        this._selectedShape = null;
        this._listeners = [];
        this._selectionListeners = [];
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
            if (this._ctx.isPointInPath(shape.path, x, y)) {
                return shape;
            }
        }
        return null;
    }
    selectShape(shape) {
        if (this._selectedShape != shape) {
            this._selectedShape = shape;
            this.draw();
            this.fireSelectionEvent(new ShapeSelectionEvent(this._selectedShape));
        }
    }
    clearSelection() {
        this.selectShape(null);
    }
    addShapeSelectionListener(listener) {
        this._listeners.push(listener);
    }
    fireShapeSelected(shape) {
        this._listeners.forEach(listener => listener.shapeSelected(shape));
    }
    toString() {
        return `ShapeViewer with ${this._shapes.length} shapes`;
    }
    draw() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._shapes.forEach(shape => {
            this._ctx.save();
            shape.draw(this._ctx);
            if (shape === this._selectedShape) {
                shape.drawSelectionBorder(this._ctx);
            }
            this._ctx.restore();
        });
    }
}
//# sourceMappingURL=shape-viewer.js.map