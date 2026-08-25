export class SelectedActionChangedEvent {
    constructor(action) {
        this._action = action;
    }
    get action() {
        return this._action;
    }
}
export class PaletteComponent {
    constructor(paletteElement, actions) {
        this._listeners = [];
        this._listeners = [];
        this._selectedAction = actions[0];
        paletteElement.classList.add("v-box");
        let html = "";
        actions.forEach(action => {
            const button = document.createElement("button");
            button.innerHTML = action.name;
            button.addEventListener("click", e => {
                this._selectedAction = action;
            });
            paletteElement.appendChild(button);
        });
        paletteElement.innerHTML = html;
        actions.forEach(action => {
            var _a;
            (_a = document.getElementById(action.id)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", e => {
                console.log("Click on ", action.name);
            });
        });
    }
    get selectedAction() {
        return this._selectedAction;
    }
    addPaletteListener(_listener) {
        this._listeners.push(_listener);
    }
    fireSelectedActionChangedEvent(e) {
        this._listeners.forEach(l => l.selectedActionChanged(e));
    }
    set selectedAction(selectedAction) {
        this._selectedAction = selectedAction;
        this.fireSelectedActionChangedEvent(new SelectedActionChangedEvent(selectedAction));
    }
}
//# sourceMappingURL=shape-palette.js.map