import Shape from './shape';

const NAME = 'pentagon';
const NUMBER_OF_SIDES = 5;

/**
 * Pentagon
 * 
 * @class Pentagon
 */
export default class Pentagon extends Shape {

  /**
   * Constructor
   */
  constructor(sideLength) {
    super(sideLength, NAME, NUMBER_OF_SIDES);
  }

  /**
   * Pentagon area
   * 
   *@returns {Number} result area u^2
   */
  area() {
    return Math.pow(this.sideLength, 2) * Math.sqrt(25 + 10 * Math.sqrt(5)) / 4;
  }
}
