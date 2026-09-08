/**
 * Defines the action protocol used by various components.
 */
import type { Shape } from "./shapes.js"
import type { ShapeViewer } from "./shape-viewer.js"

export interface CanvasAction {

    /**
     * The name of the action
     */
    readonly name: string

    readonly id: string

    readonly status: string

    /**
     * This method is invoked by the controller. Controller is first level listener
     * 
     * @param e e browser mouse event
     */
    onClick(e: MouseEvent): void

    onMouseDown(e: MouseEvent): void

    onMouseMove(e: MouseEvent): void

    onMouseUp(e: MouseEvent): void


abstract class BaseAction implements CanvasAction {

    private _shapeView: ShapeViewer

    public constructor(shapeView: ShapeViewer) {
        this._shapeView = shapeView
    }

    public get shapeViewer(): ShapeViewer {
        return this._shapeView
    }

    public get id(): string {
        return this.name.toLowerCase().split(' ').join('-')
    }
    
    public abstract get name(): string

    public abstract get status(): string

    public onClick(e: MouseEvent): void {
    }


    public onMouseDown(e: MouseEvent): void {
    }

    public onMouseMove(e: MouseEvent): void {
    }

    public onMouseUp(e: MouseEvent): void {
    }

}



export class SelectAction extends BaseAction {

    public get name(): string {
        return "Select"
    }

    public get status(): string {
        return "Click an shape to select it."
    }

    public onMouseDown(e: MouseEvent): void {
        console.log("Select action performed")

        const shape: Shape | null = this.shapeViewer.getShapeAt(e.offsetX, e.offsetY)

        if (shape) {
            this.shapeViewer.selectShape(shape)
        } else {
            this.shapeViewer.clearSelection()
        }
    }

    public get name(): string {
        return "Move"
    }

    public get status(): string {
        return "Drag to move a shape around."
    }

}

export class MoveAction extends BaseAction {

    private prevPoint: Point = null

    public onMouseDown(e: MouseEvent): void {

        this.prevPoint = new Point(e.offsetX, e.offsetY)

        console.log("Move action start", this.prevPoint)
    }

    public onMouseMove(e: MouseEvent): void {

        if (this.prevPoint) {
            const currentPoint = new Point(e.offsetX, e.offsetY)

            const translationVector = new Point(currentPoint.x - this.prevPoint.x, currentPoint.y - this.prevPoint.y)

            this.shapeViewer.getSelectedShapes().forEach(shape => shape.translate(translationVector))

            console.log("move moved", this.prevPoint, currentPoint)

            this.prevPoint = currentPoint
        }
        
    }

    public onMouseUp(e: MouseEvent): void {
        this.prevPoint = null
    }


     public get name(): string {
        return "Move"
     }

     public get status(): string {
        return "Drag to move a shape around."
     }

}


export class AddShapeAction extends BaseAction {

    private _shapeClass: any

    public constructor(shapeClass: any, shapeViewer: ShapeViewer) {
        super(shapeViewer)

        this._shapeClass = shapeClass
    }

    public get name() {
        return `Add ${this._shapeClass.name}`
    }

    public get status() {
        return `Click to add a ${this._shapeClass.name}`
    }

    public onClick(e: MouseEvent): void {
        console.log(`Add ${this._shapeClass.name} action performed`)
        const shape = this._shapeClass.initWithXY(e.offsetX, e.offsetY)
        this.shapeViewer.addShape(shape)
    }


}