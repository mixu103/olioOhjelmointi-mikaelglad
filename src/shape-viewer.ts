import { Shape, ShapeChangeEvent, ShapeChangeListener } from "./shapes.js"

export class ShapeSelectionEvent {

    private _shape: Shape | null

    constructor(shape: Shape | null) {
        this._shape = shape
    }

    public get shape(): Shape | null {
        return this._shape
    }

}

export interface ShapeSelectionListener {

    shapeSelected(e: ShapeSelectionEvent): void
}

/**
 * viewer that displays and manages shapes
 *  */
export interface ShapeViewer extends ShapeChangeListener {

    /**
     * Adds shapes to viewer
     * @param shapes shapes to add
     */
    addShapes(shapes: Shape[]): void

    addShape(shape: Shape): void

    getShapeAt(x: number, y: number): Shape | null

    selectShape(shape: Shape | null): void

    clearSelection(): void

    addShapeSelectionListener(listener: ShapeSelectionListener): void
    
    toString(): string

}

export class ShapeViewerImpl implements ShapeViewer {

    private _canvas: HTMLCanvasElement

    private _ctx: CanvasRenderingContext2D

    private _shapes: Shape[]

    private _selectedShape: Shape | null

    private _selectionListeners: ShapeSelectionListener[]

    /**
     * Creates new ShapeViewerImpl for the canvas
     */
    public constructor(canvasElement: HTMLCanvasElement) {
        this._canvas = canvasElement
        const context = canvasElement.getContext("2d")
        if (!context) {
            throw new Error("Canvas context is not available")
        }
        this._ctx = context
        this._shapes = []
        this._selectedShape = null
        this._selectionListeners = []
        this._selectionListeners = []
    }



    /**
     * Adds multiple shapes
     * @param shapes shapes to add
     */
    public addShapes(shapes: Shape[]): void {
        this._shapes.push(...shapes)
        shapes.forEach(shape => shape.addListener(this))

        this.draw()
    }

    /**
     * Adds a single shape
     * @param shape shape to add
     */
    public addShape(shape: Shape): void {
        this._shapes.push(shape)
        shape.addListener(this)
        this.draw()
    }

    public getShapeAt(x: number, y: number): Shape | null {
        for (const shape of this._shapes) {
            if (this._ctx.isPointInPath(shape.path, x, y)) {
                return shape
            }
        }
        return null
    }

    public getSelectedShape(): Shape[] {
        return [this._selectedShape]
    }


    public selectShape(shape: Shape | null): void {
        if (this._selectedShape != shape) {
            this._selectedShape = shape

            this.draw()

            this.fireSelectionEvent(shape)
        }
    }

    public clearSelection(): void {
        this.selectShape(null)
    }

    public addShapeSelectionListener(listener: ShapeSelectionListener): void {
        this._selectionListeners.push(listener)
    }

    private fireSelectionEvent(shape: Shape | null): void {
        const event = new ShapeSelectionEvent(shape)
        this._selectionListeners.forEach(listener => listener.shapeSelected(event))
    }

    public toString(): string {
        return `ShapeViewer with ${this._shapes.length} shapes`
    }


    public shapeChanged(e: ShapeChangeEvent): void {
        this.draw()
    }

    private draw(): void {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

        this._shapes.forEach(shape => {
            this._ctx.save()
            shape.draw(this._ctx)

            if (shape === this._selectedShape) {
                shape.drawSelectionBorder(this._ctx)
            }

            this._ctx.restore()
        })
    }
}