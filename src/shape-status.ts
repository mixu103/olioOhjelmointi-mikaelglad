import { PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js"

export class StatusBar implements PaletteListener{

    private _statusElement: HTMLElement

    constructor(statusElement: HTMLElement) {
        this._statusElement = statusElement
    }
    selectedActionChanged(e: SelectedActionChangedEvent): void {
        console.log("StatusBar", e.action.status)
        this._statusElement.innerHTML = e.action.status
    }

}