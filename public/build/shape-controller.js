export class CanvasController {
    constructor(initialAction, canvas) {
        this._currentAction = initialAction;
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