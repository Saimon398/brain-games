import { searchMissingNumber } from '../games/progression.js';

describe.each([
  { progression: '1 .. 3 4 5 6', expected: 2},
  { progression: '.. 10 15 20 25', expected: 5},
  { progression: '1 2 3 4 .. 6', expected: 5}
])('.add($progression)', ({ progression, expected }) => {
  test('Overall perfomance', () => {
    expect(searchMissingNumber(progression)).toEqual(expected);
  });
});

