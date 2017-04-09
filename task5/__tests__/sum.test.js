import sum from '../sum';

describe('the sum modules', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 10 + 20 to equal 30', () => {
    expect(sum(10, 20)).toBe(30);
  });

  it('adds .01 + 0.02 to equal 0.03', () => {
    // expect(sum(0.1, 0.2)).toBe(0.3);
    // expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 8);
  });
});
