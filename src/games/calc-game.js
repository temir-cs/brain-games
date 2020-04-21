import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Calculator' game

// Game task
const task = 'What is the result of the expression?';

// List of math operators
const operators = '+-*';

// Perform arithmetic calculations with the given 2 numbers and selected operator
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      // Addition (+)
      return number1 + number2;
    case '-':
      // Subtraction (-)
      return number1 - number2;
    case '*':
      // Multiplication (*)
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

// Generate data for 1 game round
const getRoundData = () => {
  // Get 2 random integers and randomly select an operator
  const number1 = getRandomInteger(0, 100);
  const number2 = getRandomInteger(0, 100);
  const operator = operators[getRandomInteger(0, operators.length - 1)];

  // Define game question and correct answer for the current round
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  // Return game question and correct answer as array
  return [question, correctAnswer];
};

// Start the game engine and play the game
export default () => {
  runEngine(task, getRoundData);
};
