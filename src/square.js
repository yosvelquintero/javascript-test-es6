import Shape from './shape';

const NAME = 'square';
const NUMBER_OF_SIDES = 4;

/**
 * Square
 * 
 * @class Square
 */
export default class Square extends Shape {

  /**
   * Constructor
   */
  constructor(sideLength) {
    super(sideLength, NAME, NUMBER_OF_SIDES);
  }

  /**
   * Square area
   * 
   * @returns {Number} result area u^2 
   */
  area() {
    return Math.pow(this.sideLength, 2);
  }
}
