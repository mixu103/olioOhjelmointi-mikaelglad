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
        actions.forEach(action => {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = action.name;
            button.addEventListener("click", () => {
                console.log("Click on ", action.name);
                this.selectedAction = action;
            });
            paletteElement.appendChild(button);
        });
        this.fireSelectedActionChangedEvent(new SelectedActionChangedEvent(this._selectedAction));
    }
    get selectedAction() {
        return this._selectedAction;
    }
    addPaletteListener(listener) {
        this._listeners.push(listener);
        listener.selectedActionChanged(new SelectedActionChangedEvent(this._selectedAction));
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