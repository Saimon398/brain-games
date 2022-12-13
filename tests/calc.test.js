import { test, expect, describe } from '@jest/globals';
import { calcExpression } from '../games/calc.js';

describe.each([
  { expression: '10 + 20', expected: '30' },
  { expression: '10 - 45', expected: '-35' },
  { expression: '10 - 3', expected: '7' },
  { expression: '5 * 12', expected: '60' },
  { expression: '0 * 23', expected: '0' },
])('.add($expression)', ({ expression, expected }) => {
  test('Overall perfomance', () => {
    expect(calcExpression(expression)).toEqual(expected);
  });
});
