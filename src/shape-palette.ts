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

    private _listeners: PaletteListener[]

    private _selectedAction: CanvasAction

    constructor(paletteElement: HTMLElement, action: CanvasAction[]){
        console.log("Actions", action)
    }

    

}