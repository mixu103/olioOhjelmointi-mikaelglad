export class SelectedActionChangedEvent {
    constructor(action) {
        this._action = action;
    }
    get action() {
        return this._action;
    }
}
export class PaletteComponent {
    constructor(paletteElement, action) {
        console.log("Actions", action);
    }
}
//# sourceMappingURL=shape-palette.js.map