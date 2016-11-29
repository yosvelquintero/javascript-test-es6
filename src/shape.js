/**
 * Shape
 * 
 * @class Shape
 */
export default class Shape {

  /**
   * Constructor
   */
  constructor(sideLength, name = '', numberOfSides = 0) {
    this.sideLength = sideLength;
    this.name = name;
    this.numberOfSides = numberOfSides;
    this.dimensionType = 'side length';
  }

  /**
   * Number of decimals
   * 
   * @param {Number} num
   * @returns {Number}  number of decimals
   */
  numberOfDecimals(num) {
    return (num.toString().split('.')[1] || []).length;
  }

  /**
   * Round if more than two decimals
   * 
   * @param {Number} num
   * @returns {Number} num
   */
  round(num) {
    return this.numberOfDecimals(num) > 2 ? num.toFixed(2) : num;
  }

  /**
   * Perimeter
   * 
   * @returns {Number} result perimeter
   */
  perimeter() {
    return this.sideLength * this.numberOfSides;
  }

  /**
   * Get ouput sentence
   * 
   * @returns {String} the ouput sentence
   */
  output() {
    let area = this.round(this.area()),
      perimeter = this.round(this.perimeter());
    return `A ${this.name} with ${this.dimensionType} ${this.sideLength} u has a perimeter of ${perimeter} u and an area of ${area} u^2`;
  }
}
