import { Shape } from "./shapes.js"

export class ShapeSelectionEvent {

    private _shape: Shape

    constructor(shape: Shape) {
        this._shape = shape
    }

    public get shape(): Shape {
        return this._shape
    }
}

export interface ShapeSelectionListener {

    shapeSelected(e: ShapeSelectionEvent): void
}

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

    private _ctx: CanvasRenderingContext2D

    private _shapes: Shape[]

    private _selectedShape: Shape | null

    private _selectionListeners: ShapeSelectionListener[]

    private _listeners: ShapeSelectionListener[]


    public addSelectionListener(listener: ShapeSelectionListener): void {
        this._selectionListeners.push(listener)
    }

    private fireSelectionEvent(e: ShapeSelectionEvent): void {
        this._selectionListeners.forEach(listener => listener.shapeSelected(e))
    }

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
        this._listeners = []
        this._selectionListeners = []
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
            if (this._ctx.isPointInPath(shape.path, x, y)) {
                return shape
            }
        }
        return null
    }

    public selectShape(shape: Shape | null): void {
        if (this._selectedShape != shape) {
            this._selectedShape = shape

            this.draw()

            this.fireSelectionEvent(new ShapeSelectionEvent(this._selectedShape))
        }
    }

    public clearSelection(): void {
        this.selectShape(null)
    }

    public addShapeSelectionListener(listener: ShapeSelectionListener): void {
        this._listeners.push(listener)
    }

    private fireShapeSelected(shape: Shape): void {
        this._listeners.forEach(listener => listener.shapeSelected(shape))
    }

    public toString(): string {
        return `ShapeViewer with ${this._shapes.length} shapes`
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