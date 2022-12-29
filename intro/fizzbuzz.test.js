const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('should return Fizz when passed 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })
  it('should return Buzz when passed 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })
  it('should return 8 when passed 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  })
  it('should return Fizzbuzz when passed 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })
}) 