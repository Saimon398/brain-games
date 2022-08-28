import readlineSync from 'readline-sync';
import sayGreetings from './cli.js';

/**
 * @description common logic for games
 */
export default (generateQuestion, getCorrectAnswer, condition) => {
  const playerName = sayGreetings();
  console.log(`${condition}`);
  for (let i = 0; i < 3; i += 1) {
    const currentQuestion = generateQuestion();
    const currentUserAnswer = readlineSync.question(`Question: ${currentQuestion}\nYour answer: `).toLowerCase().toString();
    if (getCorrectAnswer(currentQuestion) == currentUserAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${currentUserAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(currentQuestion)}')`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
