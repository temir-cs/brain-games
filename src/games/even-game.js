import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Even numbers' game

// Game task
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

// Check if a number is even. Return 'true' if a number is even or 'false' is its not
const isEven = (number) => number % 2 === 0;

// Generate data for 1 game round
const getRoundData = () => {
  // Get a random integer
  const number = getRandomInteger(0, 100);
  // Form a game question
  const question = String(number);
  // Get correct answer - is number even or not
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  // Return game question and correct answer as array
  return [question, correctAnswer];
};

export default () => {
  // Start the game engine and play the game
  runEngine(task, getRoundData);
};
