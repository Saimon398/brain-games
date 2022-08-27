import readlineSync from 'readline-sync';

/**
 * @description greetings
 * @returns {String} player's name
 */
const sayGreetings = () => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name ? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
export default sayGreetings;
