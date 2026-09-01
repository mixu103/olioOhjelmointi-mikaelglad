import { ShapeSelectionListener } from "./shape-viewer.js"


export class PropertiesComponent implements ShapeSelectionListener {

    public constructor() {

    }

    shapeSelected(e: ShapeSelectionEvent): void {
        console.log("Shape selected", e.shape)
    }

}