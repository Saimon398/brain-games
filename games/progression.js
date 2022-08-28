import generateRandomNumber from '../src/random.js';

/**
 * @description generate arithmetical progression with one missing item
 * @returns {String} arithmetical progression
 */
export const generateProgression = () => {
  const step = generateRandomNumber() % 10;
  const sequence = [];
  const indexOfMissingNumber = generateRandomNumber() % 10;
  let start = generateRandomNumber() % 10;
  let sequenceLength = 10;
  while (sequenceLength > 0) {
    if (indexOfMissingNumber === sequenceLength) {
      sequence.push('..');
    } else {
      sequence.push(start);
    }
    start += step;
    sequenceLength -= 1;
  }
  return sequence.join(' ');
};

/**
 * @description searches missing number in progression
 * @param {String} progression arithmetical progression
 * @returns {String} missing number
 */
export const searchMissingNumber = (progression) => {
  const splitedProgression = progression.split(' ');
  let missingItem;
  for (let i = 0; i < splitedProgression.length; i += 1) {
    if (splitedProgression[i] === '..' && (i !== 0 && i !== 9)) {
      missingItem = (Number(splitedProgression[i - 1]) + Number(splitedProgression[i + 1])) / 2;
      break;
    } else if (splitedProgression[i] === '..' && i === 0) {
      missingItem = splitedProgression[i + 2] - splitedProgression[i - 1];
      break;
    } else if (splitedProgression[i] === '..' && i === 9) {
      missingItem = Number(splitedProgression[i - 1])
      + (splitedProgression[i - 1] - splitedProgression[i - 2]);
      break;
    }
  }
  return missingItem.toString();
};

export const condition = 'What number is missing in the progression?';
