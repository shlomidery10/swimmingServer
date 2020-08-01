var func = require('./sum');
var pdf = require('../../pdfDocument');

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});
 
describe('sum function', () => {
  it('sums up two integers', () => {
    expect(func.sum(1, 2)).toEqual(3);
  });
});
