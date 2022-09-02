/**
 * @description defines if the number is prime
 * @param {Number} number number to be defined
 * @returns {Boolean}
 */
export const isPrime = (number) => {
  let divisor = 2;
  let flag = number !== 1;
  while (divisor <= Math.sqrt(Math.abs(number))) {
    if (number % divisor === 0) {
      flag = false;
      break;
    }
    divisor += 1;
  }
  return flag;
};

export const sayIsPrime = (number) => (isPrime(number) ? 'yes' : 'no');

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
