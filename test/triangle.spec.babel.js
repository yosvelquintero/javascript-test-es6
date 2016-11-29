import {
  expect
} from 'chai';
import Triangle from '../target/triangle';

describe('An instance of Triangle', () => {
  let sideLength = 3.5;
  let triangle = new Triangle(sideLength);
  
  it('should have a name', () => {
    expect(triangle.name)
      .to
      .equal('triangle');
  });
  
  it('should have a number of sides', () => {
    expect(triangle.numberOfSides)
      .to
      .equal(3);
  });
  
  it('should have a dimension type', () => {
    expect(triangle.dimensionType)
      .to
      .equal('side length');
  });
  
  it('should calculate the perimeter', () => {
    expect(triangle.perimeter())
      .to
      .equal(10.5);
  });
  
  it('should calculate the area', () => {
    expect(triangle.area())
      .to
      .equal(5.304405598179686);
  });
  
  it('should generate an ouput', () => {
    expect(triangle.output())
      .to
      .equal('A triangle with side length 3.5 u has a perimeter of 10.5 u and an area of 5.30 u^2');
  });
});
