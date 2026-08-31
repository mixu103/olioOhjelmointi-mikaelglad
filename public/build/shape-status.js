export class StatusBar {
    constructor(statusElement) {
        this._statusElement = statusElement;
    }
    selectedActionChanged(e) {
        console.log("StatusBar", e.action.status);
        this._statusElement.innerHTML = e.action.status;
    }
}
//# sourceMappingURL=shape-status.js.map