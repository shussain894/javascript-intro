const searchCandies = require('./searchcandy')

describe('searchCandies', () => {
  it('should return candies beginning with Ma and under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
  });

  it('should return candies beginning with Ma and under 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });
});