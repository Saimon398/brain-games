import { sayIsPrime } from '../games/prime.js';

describe.each([
  { value: 7, expected: 'yes' },
  { value: 10, expected: 'no' },
  { value: 0, expected: 'yes' },
  { value: 1, expected: 'yes' },
  { value: -10, expected: 'no' },
  { value: -7, expected: 'yes' },
])('.add($value', ({ value, expected }) => {
  test('Overall perfomance', () => {
    expect(sayIsPrime(value)).toEqual(expected);
  });
});
