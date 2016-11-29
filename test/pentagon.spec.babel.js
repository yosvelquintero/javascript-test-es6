import {
  expect
} from 'chai';
import Pentagon from '../target/pentagon';

describe('An instance of Pentagon', () => {
  let sideLength = 120;
  let pentagon = new Pentagon(sideLength);
  
  it('should have a name', () => {
    expect(pentagon.name)
      .to
      .equal('pentagon');
  });
  
  it('should have a number of sides', () => {
    expect(pentagon.numberOfSides)
      .to
      .equal(5);
  });
  
  it('should have a dimension type', () => {
    expect(pentagon.dimensionType)
      .to
      .equal('side length');
  });
  
  it('should calculate the perimeter', () => {
    expect(pentagon.perimeter())
      .to
      .equal(600);
  });
  
  it('should calculate the area', () => {
    expect(pentagon.area())
      .to
      .equal(24774.874568481122);
  });
  
  it('should generate an ouput', () => {
    expect(pentagon.output())
      .to
      .equal('A pentagon with side length 120 u has a perimeter of 600 u and an area of 24774.87 u^2');
  });
});
