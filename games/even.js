/**
 * @description defines if the random number is even
 * @param {Number} number number parity of which to be defined
 * @returns {Boolean}
 */
const isEven = (number) => (number % 2 === 0);

/**
 * @description says if the random number is even
 * @param {Number} number number parity of which to be defined
 * @returns {String} result
 */
export const sayIsEven = (number) => {
  if (typeof number !== 'number') {
    return 'no';
  }
  return isEven(number) ? 'yes' : 'no';
};

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
