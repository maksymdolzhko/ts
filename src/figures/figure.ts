import { FigureName, Colors } from "../types";
import { Utils } from "../utils";

interface IFigureProps {
    name: FigureName;
    color: Colors;
    width?: number;
    height?: number;
    radius?: number;
}

class Figure {
    protected readonly name: FigureName;
    protected readonly color: Colors;
    protected readonly width: number;
    protected readonly height: number;
    protected readonly radius: number;

    constructor(options: IFigureProps) {
        this.name = options.name;
        this.color = options.color;
        this.width = options?.width || 0;
        this.height = options?.height || 0;
        this.radius = options?.radius || 0;
    }

    private calculateArea(): number {
        switch (this.name) {
            case FigureName.rectangle:
                return Utils.rectangleArea(this.width, this.height);
            case FigureName.square:
                return Utils.rectangleArea(this.width);
            case FigureName.circle:
                return Utils.circleArea(this.radius);
            case FigureName.triangle:
                return Utils.triangleArea(this.width, this.height);
            default:
                return 0;
        }
    }

    private deteils(): { [key: string]: number } {
        switch (this.name) {
            case FigureName.rectangle:
            case FigureName.triangle:
                return { width: this.width, height: this.height };
            case FigureName.square:
                return { width: this.width };
            case FigureName.circle:
                return { radius: this.radius };
            default:
                return {};
        }
    }

    info(): object {
        return ({
            name: this.name,
            color: this.color,
            area: this.calculateArea(),
            ...this.deteils()
        })
    }
}

export { Figure }