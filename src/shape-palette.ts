import { CanvasAction } from "./shape-actions";

export class SelectedActionChangedEvent {

    private _action: CanvasAction

    constructor(action: CanvasAction) {
        this._action = action
    }

    public get action(): CanvasAction {
        return this._action
    }

}

export interface PaletteListener {

    selectedActionChanged(e: SelectedActionChangedEvent): void

}

export class PaletteComponent {

    private _listeners: PaletteListener[] = []

    private _selectedAction!: CanvasAction

    constructor(paletteElement: HTMLElement, actions: CanvasAction[]){


        this._listeners = []
        this._selectedAction = actions[0]

        paletteElement.classList.add("v-box")

        let html = ""

        actions.forEach(action => {
            const button = document.createElement("button")
            button.innerHTML = action.name
            button.addEventListener("click", e => {
                this._selectedAction = action
                
            })
            paletteElement.appendChild(button)
        })

        paletteElement.innerHTML = html 

        actions.forEach(action => {
            document.getElementById(action.id)?.addEventListener("click", e => {
                console.log("Click on ", action.name)
            })
        })

    }


    public get selectedAction(): CanvasAction {
        return this._selectedAction
    }

    public addPaletteListener(_listener: PaletteListener) {
        this._listeners.push(_listener)
    }


    private fireSelectedActionChangedEvent(e: SelectedActionChangedEvent) {
        this._listeners.forEach(l => l.selectedActionChanged(e))
    }

    private set selectedAction(selectedAction: CanvasAction)  {
        this._selectedAction = selectedAction
        this.fireSelectedActionChangedEvent(new SelectedActionChangedEvent(selectedAction))

    }


}