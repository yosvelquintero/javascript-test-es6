import Shape from './shape';

const NAME = 'circle';
const PI = 3.1415927;

/**
 * Circle
 * 
 * @class Circle
 */
export default class Circle extends Shape {

  /**
   * Constructor
   */
  constructor(sideLength) {
    super(sideLength, NAME);

    this.dimensionType = 'radius';
    this.radius = sideLength;
  }

  /**
   * Get perimeter
   * 
   *@returns {Number} result perimeter 
   */
  perimeter() {
    return 2 * PI * this.radius;
  }

  /**
   * Circle area
   * 
   *@returns {Number} result area u^2 
   */
  area() {
    return PI * Math.pow(this.radius, 2);
  }
}
