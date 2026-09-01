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

    getShapeAt(x: number, y: number): Shape | null

    selectShape(shape: Shape | null): void

    clearSelection(): void

    toString(): string
}

export class ShapeViewerImpl implements ShapeViewer {

    private _canvas: HTMLCanvasElement

    private ctx: CanvasRenderingContext2D

    private _shapes: Shape[]

    private _selectedShape: Shape | null

    /**
     * Creates new ShapeViewerImpl for the canvas
     */
    public constructor(canvasElement: HTMLCanvasElement) {
        this._canvas = canvasElement
        const context = canvasElement.getContext("2d")
        if (!context) {
            throw new Error("Canvas context is not available")
        }
        this.ctx = context
        this._shapes = []
        this._selectedShape = null
    }

    /**
     * Adds multiple shapes
     * @param shapes shapes to add
     */
    public addShapes(shapes: Shape[]): void {
        this._shapes.push(...shapes)
        this.draw()
    }

    /**
     * Adds a single shape
     * @param shape shape to add
     */
    public addShape(shape: Shape): void {
        this._shapes.push(shape)
        this.draw()
    }

    public getShapeAt(x: number, y: number): Shape | null {
        for (const shape of this._shapes) {
            if (this.ctx.isPointInPath(shape.path, x, y)) {
                return shape
            }
        }
        return null
    }

    public selectShape(shape: Shape | null): void {
        this._selectedShape = shape
        this.draw()
    }

    public clearSelection(): void {
        this.selectShape(null)
    }

    public toString(): string {
        return `ShapeViewer with ${this._shapes.length} shapes`
    }

    private draw(): void {
        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

        this._shapes.forEach(shape => {
            this.ctx.save()
            shape.draw(this.ctx)

            if (shape === this._selectedShape) {
                shape.drawSelectionBorder(this.ctx)
            }

            this.ctx.restore()
        })
    }
}