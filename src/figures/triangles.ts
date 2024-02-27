import { Colors, FigureName } from "../types";
import { Figure } from "./figure";

interface ITriangleProps {
    color: Colors;
    width: number;
    height: number;
};

class Triangle extends Figure {
    static figureName: FigureName = FigureName.triangle;

    constructor(options: ITriangleProps) {
        super({
            name: Triangle.figureName,
            color: options.color,
            width: options.width,
            height: options.height,
        })
    }
}

export { Triangle }