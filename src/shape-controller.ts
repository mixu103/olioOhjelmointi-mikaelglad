import { CanvasAction } from "./shape-actions.js";
import { PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js";

export class CanvasController implements PaletteListener {
    
    private _currentAction: CanvasAction
    
    public constructor(initialAction: CanvasAction, canvas: HTMLElement) {
        this._currentAction = initialAction

        

        canvas.addEventListener("mousedown", (e:PointerEvent) => {
            this._currentAction.onMouseDown(e)
        })

        canvas.addEventListener("mousemove", (e:PointerEvent) => {
            this._currentAction.onMouseMove(e)
        })

        canvas.addEventListener("mouseup", (e:PointerEvent) => {
            this._currentAction.onMouseUp(e)
        })

        canvas.addEventListener("click", (e:PointerEvent) => {
            this._currentAction.onClick(e)
        })

        
    }

    public selectedActionChanged(e: SelectedActionChangedEvent): void {
        console.log("CanvasController action changed", e)
        this._currentAction = e.action
    }

    

}