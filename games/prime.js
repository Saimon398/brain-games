import { generateRandomNumber } from '../src/utils.js';

/**
 * @description Check if the number is prime
 * @param {Number} value Value to be checked
 * @returns {Boolean}
 * @example
 * isPrime(7); // => true
 * isPrime(10); // => false
 */
const isPrime = (value) => {
  let divisor = 2;
  const limit = Math.sqrt(Math.abs(value));
  let flag = value !== 1;

  while (divisor <= limit) {
    if (value % divisor === 0) {
      flag = false;
      break;
    }
    divisor += 1;
  }
  return flag;
};

/**
 * @description Says if the value is prime
 * @param {Number} value
 * @returns {String}
 * @example
 * isPrime(7); // => "yes"
 * isPrime(10); // => "no"
 */
export const sayIsPrime = (value) => (isPrime(value) ? 'yes' : 'no');

export default () => {
  const question = generateRandomNumber(100);
  const answer = sayIsPrime(question);

  return {
    question,
    answer,
  };
};
