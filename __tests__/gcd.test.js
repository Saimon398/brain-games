import { gcd } from '../games/gcd.js';

describe.each([
  { numbers: '36 81', expected: 9 },
  { numbers: '23 47', expected: 1 },
  { numbers: '11 121', expected: 11 },
])('.add($numbers)', ({ numbers, expected }) => {
  test('Overall perfomance', () => {
    expect(gcd(numbers)).toEqual(expected);
  });
});
