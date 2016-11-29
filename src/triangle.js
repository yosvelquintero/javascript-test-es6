import Shape from './shape';

const NAME = 'triangle';
const NUMBER_OF_SIDES = 3;

/**
 * Triangle
 * 
 * @class Triangle
 */
export default class Triangle extends Shape {  

  /**
   * Constructor
   */
  constructor(sideLength) {
    super(sideLength, NAME, NUMBER_OF_SIDES);
  }

  /**
   * Triangle area
   * 
   * @returns {Number} result area u^2
   */
  area() {
    return Math.sqrt(3) / 4 * Math.pow(this.sideLength, 2);
  }
}
