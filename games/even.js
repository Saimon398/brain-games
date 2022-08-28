/**
 * @description defines if the random number is even
 * @param {Number} number number parity of which to be defined
 * @returns {String} result
 */
export const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
