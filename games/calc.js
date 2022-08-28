import generateRandomNumber from '../src/random.js';

/**
 * @description generate math operator randomly ('+', '-', '*')
 * @returns {String} math operator
 */
const generateMathOperator = () => {
  const sign = generateRandomNumber();
  let operation;
  if (sign < 33) {
    operation = '+';
  } else if (sign > 33 && sign < 66) {
    operation = '-';
  } else {
    operation = '*';
  }
  return operation;
};

/**
 * @description generate random math expression
 * @returns {String} math expression
 */
export const getMathExpression = () => {
  const operator = generateMathOperator();
  const firstOperand = generateRandomNumber();
  const secondOperand = generateRandomNumber();
  return `${firstOperand} ${operator} ${secondOperand}`;
};


/**
 * @description find result of expression according to the math operation
 * @param {String} operation math operation
 * @param {Number} firstOperand first operand
 * @param {Number} secondOperand second operand
 * @returns {Number} operation result
 */
export const calcExpression = (expression) => {
  const [firstOperand, operator, secondOperand] = expression.split(' ');
  switch (operator) {
    case '+':
      return +firstOperand + +secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error ('There is no such type of math operation!');
  }
};

export const condition = 'What is the result of the expression?.';
