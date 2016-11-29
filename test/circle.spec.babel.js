import {
  expect
} from 'chai';
import Circle from '../target/circle';

describe('An instance of Circle', () => {
  let radius = 2;
  let circle = new Circle(radius);
  
  it('should have a name', () => {
    expect(circle.name)
      .to
      .equal('circle');
  });
  
  it('should have a number of sides', () => {
    expect(circle.numberOfSides)
      .to
      .equal(0);
  });
  
  it('should have a dimension type', () => {
    expect(circle.dimensionType)
      .to
      .equal('radius');
  });
  
  it('should calculate the perimeter', () => {
    expect(circle.perimeter())
      .to
      .equal(12.5663708);
  });
  
  it('should calculate the area', () => {
    expect(circle.area())
      .to
      .equal(12.5663708);
  });
  
  it('should generate an ouput', () => {
    expect(circle.output())
      .to
      .equal('A circle with radius 2 u has a perimeter of 12.57 u and an area of 12.57 u^2');
  });
});
