import { AddShapeAction, SelectAction } from "./shape-actions.js"
import { PaletteComponent, PaletteListener, SelectedActionChangedEvent } from "./shape-palette.js"
import { ShapeViewer, ShapeViewerImpl } from "./shape-viewer.js"
import { Circle, Rectangle } from "./shapes.js"

export class ShapeEditor implements PaletteListener{
    private _shapeView: ShapeViewer
    private _palette: PaletteComponent

    constructor() {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement

        this._shapeView = new ShapeViewerImpl(canvas)

        this._palette = new PaletteComponent(document.getElementById("palette"), [
            new SelectAction(this._shapeView),
            new AddShapeAction(Rectangle, this._shapeView),
            new AddShapeAction(Circle, this._shapeView),
        ])
        this._palette.addPaletteListener(this)
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        console.log("Click on ", e.action.name)
    }
}

