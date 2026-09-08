import { ShapeSelectionEvent, ShapeSelectionListener } from "./shape-viewer.js"


export class PropertiesComponent implements ShapeSelectionListener {

    private _shape: Shape

    private _input: HTMLInputElement

    private _apply: HTMLButtonElement
    
    public constructor(propertiesElement: HTMLElement) {

        propertiesElement.classList.add("v-box")

        const label = document.createElement("label")
        label.innerHTML = "Color"


        this._input = document.createElement("input")
        this._apply = document.createElement("button")
        this._apply.innerHTML = "Apply"
        this._apply.addEventListener("click", _ => {
            this._shape.style = this._input.value
        })

        propertiesElement.appendChild(label)
        propertiesElement.appendChild(this._input)
        propertiesElement.appendChild(this._apply)

        this.setEnabled(false)
    }

    private setEnabled(enabled: boolean): void {
        this._input.disabled = !enabled
        this._apply.disabled = !enabled
    }

    public shapeSelected(e: ShapeSelectionEvent): void {
        console.log("Shape selected in properties:", e.shape)
        this._shape = e.shape


        if (this._shape == null) {
            this._input.value = null
            this.setEnabled(false)

        } else {
            this._input.value = this._shape.style
            this.setEnabled(true)
        }
    }


}