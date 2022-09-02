import { test, expect, describe } from '@jest/globals';
import { sayIsEven } from '../games/even.js';

describe.each([
  { value: 4, expected: 'yes' },
  { value: 9, expected: 'no' },
  { value: 0, expected: 'yes' },
  { value: 'hello', expected: 'no' },
  { value: false, expected: 'no' },
])('.add($vallue)', ({ value, expected }) => {
  test('Overall perfomance', () => {
    expect(sayIsEven(value)).toEqual(expected);
  });
});
