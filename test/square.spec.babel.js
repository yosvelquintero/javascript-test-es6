import {
  expect
} from 'chai';
import Square from '../target/square';

describe('An instance of Square', () => {
  let sideLength = 10.3;
  let square = new Square(sideLength);
  
  it('should have a name', () => {
    expect(square.name)
      .to
      .equal('square');
  });
  
  it('should have a number of sides', () => {
    expect(square.numberOfSides)
      .to
      .equal(4);
  });
  
  it('should have a dimension type', () => {
    expect(square.dimensionType)
      .to
      .equal('side length');
  });
  
  it('should calculate the perimeter', () => {
    expect(square.perimeter())
      .to
      .equal(41.2);
  });
  
  it('should calculate the area', () => {
    expect(square.area())
      .to
      .equal(106.09000000000002);
  });
  
  it('should generate an ouput', () => {
    expect(square.output())
      .to
      .equal('A square with side length 10.3 u has a perimeter of 41.2 u and an area of 106.09 u^2');
  });
});
