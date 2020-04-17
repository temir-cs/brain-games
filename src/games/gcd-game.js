import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Greatest common divisor' game

// Game task
const task = 'Find the greatest common divisor of given numbers.';

// Find GCD - greatest common divisor by applying EUCLIDIAN ALGORITHM
const getGCD = (a, b) => {
  // Define the terminal condition
  if (b === 0) return a;
  // by Euclidean algorithm GCD(a, b) == GCD (b, r) where r = a % b
  return getGCD(b, a % b);
};

// Generate data for 1 game round
const getRoundData = () => {
  // Define 2 random numbers and get their GCD
  const number1 = getRandomInteger(0, 100);
  const number2 = getRandomInteger(0, 100);
  const gcd = getGCD(number1, number2);

  // Define game question and correct answer for the current round
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd);
  return [question, correctAnswer];
};
// Start the game engine and play the game
export default () => {
  runEngine(task, getRoundData);
};
