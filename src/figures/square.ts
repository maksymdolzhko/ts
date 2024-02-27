import { FigureName } from "../types";
import { IReactangleProps, Rectangle } from "./rectangle";

type ISquareProps = Omit<IReactangleProps, 'height'>;

class Square extends Rectangle {
  static override figureName: FigureName = FigureName.square;

  constructor(options: ISquareProps) {
    super({
      name: Square.figureName,
      color: options.color,
      width: options.width,
      height: options.width
    })
  }
}

export {Square}
