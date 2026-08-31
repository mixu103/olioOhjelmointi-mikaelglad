import { CanvasAction } from "./shape-actions.js";
import { PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js";

export class CanvasController implements PaletteListener {
    
    private _currentAction: CanvasAction
    
    public constructor(initialAction: CanvasAction, canvas: HTMLElement) {
        this._currentAction = initialAction

        canvas.addEventListener("click", (e:PointerEvent) => {
            console.log("CANVAS CLICKED")
        })
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        throw new Error("Method not implemented.");
    }

    

}