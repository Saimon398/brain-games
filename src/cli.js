// Импортируем библиотеку в данный модуль
import readlineSync from 'readline-sync';

// Пишем функцию, которая запрашивает имя
export const sayGreetings = () => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name ? ');
  console.log(`Hello, ${playerName}!`);
};

