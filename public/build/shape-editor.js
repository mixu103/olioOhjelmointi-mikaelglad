import { AddShapeAction, SelectAction } from "./shape-actions.js";
import { PaletteComponent } from "./shape-palette.js";
import { ShapeViewerImpl } from "./shape-viewer.js";
import { Circle, Rectangle } from "./shapes.js";
import { StatusBar } from "./shape-status.js";
import { CanvasController } from "./shape-controller.js";
import { PropertiesComponent } from "./shape-properties.js";
export class ShapeEditor {
    constructor() {
        const canvas = document.getElementById("canvas");
        this._shapeView = new ShapeViewerImpl(canvas);
        this._palette = new PaletteComponent(document.getElementById("palette"), [
            new SelectAction(this._shapeView),
            new AddShapeAction(Rectangle, this._shapeView),
            new AddShapeAction(Circle, this._shapeView),
        ]);
        this._properties = new PropertiesComponent(document.getElementById("properties"));
        this._shapeView.addShapeSelectionListener(this._properties);
        this._statusBar = new StatusBar(document.getElementById("status"));
        this._canvasController = new CanvasController(this._palette.selectedAction, canvas);
        this._palette.addPaletteListener(this._statusBar);
        this._palette.addPaletteListener(this);
        this._palette.addPaletteListener(this._canvasController);
    }
    selectedActionChanged(e) {
        console.log("ShapeEditor ", e.action.name);
    }
}
//# sourceMappingURL=shape-editor.js.map