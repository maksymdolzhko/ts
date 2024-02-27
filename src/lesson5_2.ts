// Створіть класи:
// - Circle;
// - Rectangle;
// - Square;
// - Triangle;

// У кожного з них є загальнодоступний метод:
// - info;

// У кожної фігури є загальнодоступні властивості
// - колір (не можна змінювати після створення)
// - назва (не можна змінювати після створення)

// У Square і Rectangle:
// - в info виводиться поле formula із формулою розрахунку площі

import { Rectangle } from './figures/rectangle';
import { Square } from './figures/square';
import { Circle } from './figures/circle';
import { Triangle } from './figures/triangles';
import { Colors } from './types';

// Rectangle:
  const rect0 = new Rectangle({ color: Colors.blue, width: 5, height: 3 });
  const rect1 = new Rectangle({ color: Colors.green, width: 3, height: 3 });
  const rect2 = new Rectangle({ color: Colors.red, width: 1, height: 0 });
  const rectangles = {
    [`rect${0}`]: rect0.info(),
    [`rect${1}`]: rect1.info(),
    [`rect${2}`]: rect2.info(),
  };

  console.group('Rectangles:')
  console.table(rectangles);
  console.groupEnd();


// Squares:
  const square0 = new Square({ color: Colors.black, width: 5 });
  const square1 = new Square({ color: Colors.blue, width: 3 });
  const square2 = new Square({ color: Colors.red, width: 0 });
  const squares = {
    square0: square0.info(),
    square1: square1.info(),
    square2: square2.info(),
  };

  console.group('Squares:')
  console.table(squares);
  console.groupEnd();


  // Circle:
  const circle0 = new Circle({ color: Colors.red, radius: 5 });
  const circle1 = new Circle({ color: Colors.blue, radius: 3 });
  const circle2 = new Circle({ color: Colors.green,  radius: 0 });
  const circles = {
    circle0: circle0.info(),
    circle1: circle1.info(),
    circle2: circle2.info(),
  };

  console.group('Circle:')
  console.table(circles);
  console.groupEnd();


  // Triangle:
  const triangle0 = new Triangle({ color: Colors.blue, width: 5, height: 3 });
  const triangle1 = new Triangle({ color: Colors.green, width: 3, height: 3 });
  const triangle2 = new Triangle({ color: Colors.red, width: 1, height: 0 });
  const triangles = {
    triangle0: triangle0.info(),
    triangle1: triangle1.info(),
    triangle2: triangle2.info(),
  };

  console.group('Triangles:')
  console.table(triangles);
  console.groupEnd();


  