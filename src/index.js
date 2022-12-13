import readlineSync from 'readline-sync';
import sayGreetings from './cli.js';
import { stringify } from './utils.js';

/**
 * @description Main logic for game
 * @param {Object} game Data for the game { question, answer }
 * @param {String} condition Condition for the game
 */
export default (game, condition) => {
  const playerName = sayGreetings();
  console.log(condition);

  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = game();
    const userAnswer = readlineSync
      .question(`Question: ${question}\nYour answer: `)
      .toLowerCase();

    if (userAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${userAnswer} is wrong answer. Correct answer was ${answer}`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}`);
};
