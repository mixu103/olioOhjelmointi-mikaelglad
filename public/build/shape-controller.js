export class CanvasController {
    constructor(initialAction, canvas) {
        this._currentAction = initialAction;
        canvas.addEventListener("click", (e) => {
            console.log("CANVAS CLICKED");
        });
    }
    selectedActionChanged(e) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=shape-controller.js.map