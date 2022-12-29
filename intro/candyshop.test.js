const Candy = require('./candyshop');

describe('Candy', () => { 
  it('returns Mars', () => {
    let CandyDouble = new Candy('Mars', 4.99);
    expect(CandyDouble.getName()).toBe('Mars');
  });
});