import { generateRandomNumber, stringify } from '../src/utils.js';

/**
 * @description Returns data: progression and missing item
 * @returns {Object} { progression, missingItem }
 * @example
 * generateProgressionData();
 * {
 *    progression: "5 10 15 20 25 30 .. 40 45 50",
 *    missingItem: 35,
 * }
 */
const generateProgressionData = () => {
  const step = generateRandomNumber(100) % 10;
  const missingIndex = generateRandomNumber(10);
  const sequence = [];
  let count = 0;
  let index = 0;

  while (count < 10) {
    index += step;
    const value = count === missingIndex ? '..' : index;
    sequence.push(value);
    count += 1;
  }

  const progression = sequence.join(' ');
  const missingItem = (missingIndex + 1) * step;

  return { progression, missingItem };
};

export default () => {
  const { progression, missingItem } = generateProgressionData();
  return {
    question: progression,
    answer: stringify(missingItem),
  };
};
