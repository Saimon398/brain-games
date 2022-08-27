import readlineSync from 'readline-sync';
import sayGreetings from './cli.js';

/**
 * @description generates random number from 0 to 100
 * @returns {Number} generated number
 */
const generateRandomNumber = () => Math.round(Math.random() * 100);

/**
 * @description defines if the number is even
 * @param {Number} number number parity of which to be defined
 * @returns {String} result
 */
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

/**
 * @description logic of game about guessing if the number is even
 */
export default () => {
  const userName = sayGreetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = generateRandomNumber();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `).toLowerCase();
    if (isEven(question) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(question)}')`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
