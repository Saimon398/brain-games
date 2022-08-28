/**
 * @description defines if the number is prime
 * @param {Number} number number to be defined
 * @returns {Boolean}
 */
export const isPrime = (number) => {
  let divisor = 2;
  let flag = true;
  while (divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
      flag = false;
      break;
    }
    divisor += 1;
  }
  return flag ? 'yes' : 'no';
};

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
