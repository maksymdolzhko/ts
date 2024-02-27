// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва,
// які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print,
// який виводить рядок із формулою розрахунку площі

import { FigureName, Colors } from './types';

{
  /**
   * Figure
  */

  interface IFigure {
    _name: FigureName;
    _color: Colors;
    _width: number;
    _height: number;
    calculateArea: () => number;
  }
  interface FigureProps {
    name: FigureName;
    color: Colors;
    width?: number;
    height?: number;
  }
  class Figure implements IFigure {
    _name = FigureName.unknown;
    _color = Colors.transparent;
    _height = 0;
    _width = 0;

    constructor(options: FigureProps) {
      this._name = options.name;
      this._color = options.color;
      this._height = options.height || 0;
      this._width = options.width || 0;
    }

    get getWidth() {
      return this._width;
    }
    get getHeight() {
      return this._height;
    }

    calculateArea() {
      return this.getWidth * this.getHeight;
    };
  }



  /**
   * Reactangle
  */

  class Rectangle extends Figure { }

  const rectangle = new Rectangle({
    name: FigureName.rectangle,
    color: Colors.black,
    width: 5,
    height: 3,
  });

  console.log('rectangle area :::', rectangle.calculateArea());



  /**
   * Square
  */
  interface SquareProps {
    name: FigureName;
    color: Colors;
    width: number;
  }

  class Square extends Figure {
    constructor(options: SquareProps) {
      super({
        name: options.name,
        color: options.color,
        width: options.width,
        height: options.width,
      })
    }
  }

  const square = new Square({
    name: FigureName.square,
    color: Colors.blue,
    width: 5,
  });

  console.log('rectangle square :::', square.calculateArea());



  /**
   * Circle
  */

  interface CircleProps {
    name: FigureName;
    color: Colors;
    radius: number;
  }

  class Circle extends Figure {
    private _radius = 0;

    constructor(options: CircleProps) {
      super({
        name: options.name,
        color: options.color,
      })
      this._radius = options.radius;
    }

    get radius(): number {
      return this._radius;
    }

    override calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  const circle = new Circle({
    radius: 2,
    name: FigureName.circle,
    color: Colors.red,
  });

  console.log('circle area ::', circle.calculateArea())

  /**
   * Triangle
  */

  interface PropsTriangle {
    name: FigureName;
    color: Colors;
    sideA: number;
    sideB: number;
    angleAB: number;
  }

  class Triangle extends Figure {
    private _sideA = 0;
    private _sideB = 0;
    private _angleAB = 0;

    constructor(options: PropsTriangle) {
      super({
        name: options.name,
        color: options.color,
      });

      this._sideA = options.sideA;
      this._sideB = options.sideB;
      this._angleAB = options.angleAB;
    }

    get getSideA(): number {
      return this._sideA;
    }

    get getSideB(): number {
      return this._sideB;
    }

    get getAngle(): number {
      return this._angleAB;
    }

    override calculateArea(): number {
      return (this._sideA * this._sideB * Math.sin(this.getAngle)) / 2;
    }
  }

  const triangle = new Triangle({
    name: FigureName.square,
    color: Colors.blue,
    sideA: 5,
    sideB: 3,
    angleAB: 30,
  });

  console.log('rectangle square :::', triangle.calculateArea());
}