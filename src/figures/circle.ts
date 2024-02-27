import { Colors, FigureName } from "../types";
import { Figure } from "./figure";

interface ICircleProps {
    radius: number;
    color: Colors;
};

class Circle extends Figure {
    static figureName: FigureName = FigureName.circle;

    constructor(options: ICircleProps) {
        super({
            name: Circle.figureName,
            color: options.color,
            radius: options.radius,
        })
    }
}

export { Circle }