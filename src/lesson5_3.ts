
import { Colors, FigureName, TAndle } from "./types";
{
  // 1) Створити клас Triangle;
  // - calculateArea загальнодоступний метод
  // - колір і назва властивості, які не можна змінювати після створення

  abstract class Figure {
    abstract readonly figurename: FigureName;
    abstract readonly color: Colors;
    abstract calculateArea(): number;
  }

  // 2) я хочу створити такий класс який буде отримувати набір з данними трьох видів:
  // - 1. widthA, height; - сторона і висота;
  // - 2. widthA, widthB, angleAB - дві сторони і кут між ними;
  // - 3. widthA, widthB, widthC - всі сторони;
  // підкажіть як краще організувати універсальний підхід для всих трьох випадків.


  // Такий підхід працювати не буде:

  // constructor(..., widthA: number, height: number);
  // constructor(..., widthA: number, height: number, angleAB: TAndle);
  // constructor(..., widthA: number, widthB: number, );
  // constructor(..., widthA: number, ...rest: (number | TAndle)[]){
  //   super();
  //   const [height, widthB, widthC, angleAB] = rest;
  //   ...
  // }


  // А цей що нижче з помилкою в 63-67 строчці і не можу зрозуміти чому і що не так:

  interface TBase {
    widthA: number;
  }
  interface T1 extends TBase {
    height: number;
  }
  interface T2 extends TBase {
    widthB: number;
    widthC: number;
  }
  interface T3 {
    widthB: number;
    angleAB: TAndle // number: 0 ... 90;
  }

  class Triangle extends Figure {
    readonly figurename: FigureName.triangle = FigureName.triangle;
    readonly color: Colors = Colors.transparent;
  
    private _widthA!: number;
    private _widthB?: number = 0;
    private _widthC?: number = 0;
    private _height?: number = 0;
    private _angleAB?: TAndle = 0;
  
    constructor(options: T1 | T2 | T3 ){
      super();
  
      this._widthA = options.widthA;
      this._widthB = options?.widthB || 0;
      this._widthC = options?.widthC || 0;
      this._height = options?.height || 0;
      this._angleAB = options?.angleAB || 0;
    }
  
    calculateArea(): number {
      return 0;
    }
  }
}
