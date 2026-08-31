import { AddShapeAction, SelectAction } from "./shape-actions.js"
import { PaletteComponent, PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js"
import { ShapeViewer, ShapeViewerImpl } from "./shape-viewer.js"
import { Circle, Rectangle } from "./shapes.js"
import { StatusBar } from "./shape-status.js"
import { CanvasController } from "./shape-controller.js"

export class ShapeEditor implements PaletteListener{
    private _shapeView: ShapeViewer

    private _palette: PaletteComponent

    private _statusBar: StatusBar

    private _canvasController: CanvasController

    constructor() {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement

        this._shapeView = new ShapeViewerImpl(canvas)

        this._palette = new PaletteComponent(document.getElementById("palette") as HTMLElement, [
            new SelectAction(this._shapeView),
            new AddShapeAction(Rectangle, this._shapeView),
            new AddShapeAction(Circle, this._shapeView),
        ])

        this._statusBar = new StatusBar(document.getElementById("status") as HTMLElement)

        this._canvasController = new CanvasController(this._palette.selectedAction, canvas)

        this._palette.addPaletteListener(this._statusBar)
        this._palette.addPaletteListener(this)
        this._palette.addPaletteListener(this._canvasController)
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        console.log("ShapeEditor ", e.action.name)
    }
}