class BaseAction {
    constructor(shapeView) {
        this._shapeView = shapeView;
    }
    get shapeViewer() {
        return this._shapeView;
    }
    get id() {
        return this.name.toLowerCase().split(' ').join('-');
    }
    onClick(e) {
    }
    onMouseDown(e) {
    }
    onMouseMove(e) {
    }
    onMouseUp(e) {
    }
}
export class SelectAction extends BaseAction {
    get name() {
        return "Select";
    }
    get status() {
        return "Click an shape to select it.";
    }
    onMouseDown(e) {
        console.log("Select action performed");
        const shape = this.shapeViewer.getShapeAt(e.offsetX, e.offsetY);
        if (shape) {
            this.shapeViewer.selectShape(shape);
        }
        else {
            this.shapeViewer.clearSelection();
        }
    }
    get name() {
        return "Move";
    }
    get status() {
        return "Drag to move a shape around.";
    }
}
export class MoveAction extends BaseAction {
    constructor() {
        super(...arguments);
        this.prevPoint = null;
    }
    onMouseDown(e) {
        this.prevPoint = new Point(e.offsetX, e.offsetY);
        console.log("Move action start", this.prevPoint);
    }
    onMouseMove(e) {
        if (this.prevPoint) {
            const currentPoint = new Point(e.offsetX, e.offsetY);
            const translationVector = new Point(currentPoint.x - this.prevPoint.x, currentPoint.y - this.prevPoint.y);
            this.shapeViewer.getSelectedShapes().forEach(shape => shape.translate(translationVector));
            console.log("move moved", this.prevPoint, currentPoint);
            this.prevPoint = currentPoint;
        }
    }
    onMouseUp(e) {
        this.prevPoint = null;
    }
    get name() {
        return "Move";
    }
    get status() {
        return "Drag to move a shape around.";
    }
}
export class AddShapeAction extends BaseAction {
    constructor(shapeClass, shapeViewer) {
        super(shapeViewer);
        this._shapeClass = shapeClass;
    }
    get name() {
        return `Add ${this._shapeClass.name}`;
    }
    get status() {
        return `Click to add a ${this._shapeClass.name}`;
    }
    onClick(e) {
        console.log(`Add ${this._shapeClass.name} action performed`);
        const shape = this._shapeClass.initWithXY(e.offsetX, e.offsetY);
        this.shapeViewer.addShape(shape);
    }
}
//# sourceMappingURL=shape-actions.js.map