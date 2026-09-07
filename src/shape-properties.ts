import { ShapeSelectionEvent, ShapeSelectionListener } from "./shape-viewer.js"


export class PropertiesComponent implements ShapeSelectionListener {

    public constructor(propertiesElement: HTMLElement) {

    }

    public shapeSelected(e: ShapeSelectionEvent): void {
        console.log("Shape selected in properties:", e.shape)
    }

    


}