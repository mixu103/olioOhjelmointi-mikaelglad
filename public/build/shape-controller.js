export class CanvasController {
    constructor(initialAction, canvas) {
        this._currentAction = initialAction;
        canvas.addEventListener("mousedown", (e) => {
            this._currentAction.onMouseDown(e);
        });
        canvas.addEventListener("mousemove", (e) => {
            this._currentAction.onMouseMove(e);
        });
        canvas.addEventListener("mouseup", (e) => {
            this._currentAction.onMouseUp(e);
        });
        canvas.addEventListener("click", (e) => {
            this._currentAction.onClick(e);
        });
    }
    selectedActionChanged(e) {
        console.log("CanvasController action changed", e);
        this._currentAction = e.action;
    }
}
//# sourceMappingURL=shape-controller.js.map