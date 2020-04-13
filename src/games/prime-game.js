import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Prime number' game

// Game rules
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Check if a number is prime
const isPrime = (number) => {
  const middle = Math.floor(number / 2);
  // Check if a number is 1. If it is - then its NOT prime
  if (number <= 1) {
    return 'no';
  }
  // Iterate trough all smaller numbers beginning from 2 until middle boundary
  for (let i = 2; i <= middle; i += 1) {
    // if the given number has any divisor other than 1 and itself - then it's NOT prime
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Generate data for 1 game round
const getRoundData = () => {
  // Get a random integer and find it middle boundary for 'for' loop
  const randomInt = getRandomInteger(100);

  // Form a game question and correct answer
  const gameQuestion = String(randomInt);
  const correctAnswer = isPrime(randomInt);

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

const playPrimeGame = () => {
  runEngine(rules, getRoundData);
};
export default playPrimeGame;
