import { test, expect, describe } from '@jest/globals';
import { calculateGCD } from '../games/gcd.js';

describe.each([
  { numbers: '36 81', expected: '3' },
  { numbers: '23 47', expected: '1' },
])('.add($numbers)', ({ numbers, expected }) => {
  test('Overall perfomance', () => {
    expect(calculateGCD(numbers)).toEqual(expected);
  });
});
