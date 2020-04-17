import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Prime number' game

// Game task
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Check if a number is prime
const isPrime = (number) => {
  // Check if a number is 1, 0 or negative. If it is one of these - then its NOT prime
  if (number <= 1) {
    return false;
  }
  // Get a middle boundary for 'for' loop
  const middle = number / 2;
  // Iterate trough all smaller numbers beginning from 2 until middle boundary
  for (let i = 2; i <= middle; i += 1) {
    // if the given number has any divisor other than 1 and itself - then it's NOT prime
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Generate data for 1 game round
const getRoundData = () => {
  // Get a random integer and find its middle boundary for 'for' loop
  const number = getRandomInteger(0, 100);

  // Form a game question and correct answer
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  // Return game question and correct answer as array
  return [question, correctAnswer];
};
// Start the game engine and play the game
export default () => {
  runEngine(task, getRoundData);
};
