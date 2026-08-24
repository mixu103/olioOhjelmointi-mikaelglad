import { Shape } from "./shapes.js";

/**
 * viewer that displays and manages shapes
 *  */
export interface ShapeViewer {

    /**
     * Adds shapes to viewer
     * @param shapes shapes to add
     */
    addShapes(shapes: Shape[]): void

    addShape(shape: Shape): void

}

export class ShapeViewerImpl implements ShapeViewer {


    private ctx: CanvasRenderingContext2D

    private shapes: Shape[]

    /**
     * Creates new ShapeViewerImpl for the canvas
     */
    public constructor(canvasElement: HTMLCanvasElement) {
        this.ctx = canvasElement.getContext("2d")!
        this.shapes = []
    }

    /**
     * Adds multiple shapes
     * @param shapes shapes to add
     */
    public addShapes(shapes: Shape[]): void {
        this.shapes.push(...shapes)
        this.draw()
    }

    /**
     * Adds a single shape
     * @param shape shape to add
     */
    public addShape(shape: Shape): void {
        this.shapes.push(shape)
        this.draw()
    }

    private draw(): void {
        this.shapes.forEach(shape => shape.draw(this.ctx))
    }

    /**
     * Returns string representation of the shape viewer
     * @returns string containing the shapes
     */
    public toString(): string {
        let result = " ShapeViewer with shapes:\n"

        this.shapes.forEach(shape => result += shape.toString() + "\n")

        return result
    }
}