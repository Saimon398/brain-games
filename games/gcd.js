import { generateRandomNumber, stringify } from '../src/utils.js';

/**
 * @description Returns two random values
 * @returns {Array []}
 * @example
 * generateTwoRandomValues(50); // => [21, 43]
 * generateTwoRandomValues(70); // => [31, 67]
 */
const generateTwoRandomValues = (maxValue) => {
  const num1 = generateRandomNumber(maxValue);
  const num2 = generateRandomNumber(maxValue);
  return [num1, num2];
};

/**
 * @description Return expression with 2 random values
 * @param {Array []} nums Nums to be included in expression
 * @returns {String}
 * @example
 * buildExpression([36, 9]); // => "36 9"
 */
const buildExpression = ([num1, num2]) => `${num1} ${num2}`;

/**
 * @description Return greatest common divisor of values
 * @param {Array []} values Values GCD of which to be found
 * @returns {Number} Greatest Common Divisor
 * @example
 * calculateGCD([36, 9]); // => 4
 */
const calculateGCD = (values) => {
  const [left, right] = values;
  let divisor = left > right ? left : right;

  while (left % divisor !== 0 || right % divisor !== 0) {
    divisor -= 1;
  }

  return stringify(divisor);
};

export default () => {
  const values = generateTwoRandomValues(100);
  const question = buildExpression(values);
  const answer = calculateGCD(values);

  return {
    question,
    answer,
  };
};
