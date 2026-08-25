import { SelectAction } from "./shape-actions"
import { PaletteComponent } from "./shape-palette"

const canvas = document.getElementById("canvas") as HTMLCanvasElement

const shapeViewer = new ShapeViewer(canvas)

const paletteElement = document.getElementById("palette")

new PaletteComponent(paletteElement, [
    new SelectAction(shapeViewer)
])