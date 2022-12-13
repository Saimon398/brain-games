import readlineSync from 'readline-sync';

/**
 * @description Return input value (player's name) and say greetings
 * @returns {String} Player's name
 */
const sayGreetings = () => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name ? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export default sayGreetings;
