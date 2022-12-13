import { generateRandomNumber } from '../src/utils.js';

const MATH_OPERATIONS = {
  '+': (num1, num2) => Number(num1) + Number(num2),
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

/**
 * @description Returns math operator +/-/* by random
 * @returns {String} Random math operator
 * @example
 * getMathOperator(); // => '+'
 * getMathOperator(); // => '*'
 */
const getMathOperator = () => {
  const operators = Object.keys(MATH_OPERATIONS);
  const index = generateRandomNumber(operators.length);
  return operators[index];
};

/**
 * @description Returns random math expression
 * @param {Number} maxValue Max value that the operand can take
 * @returns {String} Math expression
 * @example
 * getMathExpression(50); // => 34 + 21
 * getMathExpression(10); // => 5 * 2
 */
const buildMathExpression = (maxValue) => {
  const operator = getMathOperator();
  const leftValue = generateRandomNumber(maxValue);
  const rightValue = generateRandomNumber(maxValue);
  const expression = `${leftValue} ${operator} ${rightValue}`;
  return expression;
};

/**
 * @description Return result of math expression
 * @param {String} expression Expression to be calculated
 * @returns {Number}
 * @example
 * calcExpression('10 - 4'); // => 6
 * calcExpression('50 + 25'); // => 75
 */
const calcExpression = (expression) => {
  const [leftValue, operator, rightValue] = expression.split(' ');
  const calculate = MATH_OPERATIONS[operator];
  return calculate(leftValue, rightValue);
};

export default () => {
  const question = buildMathExpression(100);
  const answer = calcExpression(question);

  return {
    question,
    answer,
  };
};
