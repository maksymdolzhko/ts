export class Utils {
  private constructor() { }

  static rectangleArea(width: number, height?: number) {
    if (!width) return 0;

    return (
      !height
        ? Math.pow(width, 2)
        : width * height
    );
  }

  static circleArea(radius: number) {
    if (!radius) return 0;

    return (
      Math.PI * Math.pow(radius, 2)
    );
  }

  static triangleArea(width: number, height: number) {
    if (!width || !height) return 0;

    return (width * height) / 2;
  }
}