import { Colors, FigureName } from "../types";
import { Utils } from "../utils";
import { Figure } from "./figure";

interface IReactangleProps {
    name?: FigureName;
    color: Colors;
    width: number;
    height: number;
}

class Rectangle extends Figure {
    static figureName: FigureName = FigureName.rectangle;

    constructor(options: IReactangleProps) {
        super({
            name: options.name || Rectangle.figureName,
            color: options.color,
            width: options.width,
            height: options.height,
        });
    }

    override info(){
        return({
            ...super.info(),
            formula: `${Utils.rectangleArea}`    
        })
    }
}

export { Rectangle }
export type { IReactangleProps }