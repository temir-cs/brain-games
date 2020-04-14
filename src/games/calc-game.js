import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Calculator' game

// Game task
const task = 'What is the result of the expression?';

// Perform arithmetic calculations with the given 2 numbers and operator
const doCalc = (number1, number2, operator) => {
  let result = 0;
  // Get a correct answer based on selected operator
  switch (operator) {
    case '+':
      // Addition (+)
      result = number1 + number2;
      break;
    case '-':
      // Subtraction (-)
      result = number1 - number2;
      break;
    case '*':
      // Multiplication (*)
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
};

// Generate data for 1 game round
const getRoundData = () => {
  // Get 2 random integers and randomly select and operator
  const number1 = getRandomInteger(0, 100);
  const number2 = getRandomInteger(0, 100);
  const operators = '+-*';
  const operator = operators[getRandomInteger(0, operators.length)];

  // Define game question and correct answer for the current round
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = doCalc(number1, number2, operator);

  // Return game question and correct answer as array
  return [question, correctAnswer];
};

// Start the game engine and play the game
export default () => {
  runEngine(task, getRoundData);
};
