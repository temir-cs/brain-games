import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Greatest common divisor' game

// Game task
const task = 'Find the greatest common divisor of given numbers.';

// Find GCD - greatest common divisor
const getGCD = (num1, num2) => {
  // Identify smaller and larger number
  const smallerNum = Math.min(num1, num2);
  const largerNum = Math.max(num1, num2);

  // Find the middle boundary for 'for' loop to stop
  const middle = smallerNum / 2;
  // Define gcd, set to 1
  let gcd = 1;

  // if larger number divided by smaller has 0 divisor - gcd is a smaller number
  if (largerNum % smallerNum === 0) {
    gcd = smallerNum;
  } else {
    // else iterate trough both numbers and find common divisors
    for (let i = 1; i <= middle; i += 1) {
      if (largerNum % i === 0 && smallerNum % i === 0) {
        gcd = i;
      }
    }
  }
  return gcd;
};

// Generate data for 1 game round
const getRoundData = () => {
  // Define 2 random numbers and get their GCD
  const number1 = getRandomInteger(0, 100);
  const number2 = getRandomInteger(0, 100);
  const gcd = getGCD(number1, number2);

  // Define game question and correct answer for the current round
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd;
  return [question, correctAnswer];
};
// Set fame task and play the game
export default () => {
  runEngine(task, getRoundData);
};
