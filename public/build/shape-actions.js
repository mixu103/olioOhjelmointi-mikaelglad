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
}
export class SelectAction extends BaseAction {
    get name() {
        return "Select";
    }
    get status() {
        return "Click an shape to select it.";
    }
    onClick(e) {
        // TODO: Implement this 
        console.log("Select action performed");
    }
}
export class AddShapeAction extends BaseAction {
    constructor(shapeClass, shapeViewer) {
        super(shapeViewer);
        this._shapeClass = shapeClass;
    }
    get name() {
        return `Add $(this._shapeClass.name)`;
    }
    get status() {
        return `Click to add a ${this._shapeClass.name}`;
    }
    onClick(e) {
        console.log("Add ${this.shapeClass.name} action performed");
        const shape = this._shapeClass.initWithXY(e.offsetX, e.offsetY);
        this.shapeViewer.addShape(shape);
    }
}
//# sourceMappingURL=shape-actions.js.map