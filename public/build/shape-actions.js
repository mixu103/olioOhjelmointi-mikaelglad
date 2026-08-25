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
        // throw new Error("Implement this method later")
    }
}
export class AddShapeAction extends BaseAction {
    constructor(shapeClass, shapeViewer) {
        super(shapeViewer);
        this._shapeClass = shapeClass;
    }
    get name() {
        return this._shapeClass.name;
    }
    get status() {
        return 'Click to add a ${this.name}';
    }
    onClick(e) {
        // TODO: Implement this 
        // throw new Error("Implement this method later")
    }
}
//# sourceMappingURL=shape-actions.js.map