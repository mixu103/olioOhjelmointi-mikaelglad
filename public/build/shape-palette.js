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
        paletteElement.classList.add("v-box");
        actions.forEach(action => {
            paletteElement.innerHTML += `<button id="${action.id}">${action.name}</button>`;
        });
    }
}
//# sourceMappingURL=shape-palette.js.map