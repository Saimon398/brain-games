import generateRandomNumber from '../src/random.js';

/**
 * @description generates 2 random numbers
 * @returns {String}
 */
export const getNumbers = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  return `${firstNumber} ${secondNumber}`;
};

/**
 * @description find greatest common divisor of 2 numbers
 * @param {Number} firstNumber first number
 * @param {Number} secondNumber second number
 * @returns {Number} greatest common divisor
 */
export const gcd = (numbers) => {
  const [firstNumber, secondNumber] = numbers.split(' ');
  let divisor = firstNumber > secondNumber ? firstNumber : secondNumber;
  while (firstNumber % divisor !== 0 || secondNumber % divisor !== 0) {
    divisor -= 1;
  }
  return divisor.toString();
};

export const condition = 'Find the greatest common divisor of given numbers.';
