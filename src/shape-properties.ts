import { ShapeSelectionEvent, ShapeSelectionListener } from "./shape-viewer.js"


export class PropertiesComponent implements ShapeSelectionListener {

    private _shape: Shape

    public constructor(propertiesElement: HTMLElement) {

        propertiesElement.classList.add("v-box")

        const label = document.createElement("label")
        label.innerHTML = "Color"


        const input: HTMLInputElement = document.createElement("input")
        
        const apply: HTMLButtonElement = document.createElement("button")
        apply.innerHTML = "Apply"
        apply.addEventListener("click", _ => {

        })

        propertiesElement.appendChild(label)
        propertiesElement.appendChild(input)
        propertiesElement.appendChild(apply)

        input.disabled = true
        apply.disabled = true
    }

    private setenabled(enabled: boolean): void {
    
    }

    public shapeSelected(e: ShapeSelectionEvent): void {
        console.log("Shape selected in properties:", e.shape)
        this._shape = e.shape


    }

    


}