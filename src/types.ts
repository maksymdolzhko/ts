enum FigureName {
    unknown = 'unknown',
    rectangle = 'rectangle',
    square = 'square',
    triangle = 'triangle',
    circle = 'circle',
};

enum Colors {
    transparent = 'transparent',
    red = 'red',
    green = 'green',
    blue = 'blue',
    black = 'black',
};

type Enumerate<N extends number, Acc extends number[] = []> =
  Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>;
type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
type TAndle = NumberRange<0, 90>;


export { FigureName, Colors, TAndle };