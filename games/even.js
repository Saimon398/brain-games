import { generateRandomNumber } from '../src/utils.js';

/**
 * @description Checks if the random number is even
 * @param {Number} number Value parity of which to be defined
 * @returns {Boolean}
 * @example
 * isEven(4); // => true
 * isEven(7); // => false
 */
const isEven = (number) => (number % 2 === 0);

/**
 * @description Says if the value is even
 * @param {Number} value Value parity of which to be defined
 * @returns {String}
 * @example
 * sayIsEven(4); // => 'yes'
 * sayIsEven(7); // => 'no'
 */
const sayIsEven = (value) => (isEven(value) ? 'yes' : 'no');

export default () => {
  const question = generateRandomNumber(100);
  const answer = sayIsEven(question);

  return {
    question,
    answer,
  };
};
