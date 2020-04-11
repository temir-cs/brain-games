import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Even numbers' game

// Game rules
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// Check if a number is even. Return 'true' if a number is even or 'false' is its not
export const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

// Generate data for 1 game round
const getRoundData = () => {
  // Get a random integer
  const randomInt = getRandomInteger(100);
  // Form a game question
  const gameQuestion = String(randomInt);
  // Get correct answer - is number even or not
  const correctAnswer = isEven(randomInt);

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

const playEvenGame = () => {
  // Set Rules and play the game
  runEngine(rules, getRoundData);
};
export default playEvenGame;
