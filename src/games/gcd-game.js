import { playGame } from '../index.js';

// 'Greatest common divisor' game

// Generate data for 1 game round
const getRoundData = () => {
  // Define 2 random numbers
  const randInt1 = Math.floor(Math.random() * 100);
  const randInt2 = Math.floor(Math.random() * 100);
  // Identify smaller and larger number
  const minNum = Math.min(randInt1, randInt2);
  const maxNum = Math.max(randInt1, randInt2);
  // Find the middle boundary for 'for' loop to stop
  const middle = Math.floor(minNum / 2);
  // Define gcd, set to 0
  let gcd = 0;

  // if larger number divided by smaller has 0 divisor - gcd is a smaller number
  if (maxNum % minNum === 0) {
    gcd = minNum;
  } else {
    // else iterate trough both numbers and find common divisors
    for (let i = 1; i <= middle; i += 1) {
      if (maxNum % i === 0 && minNum % i === 0) {
        gcd = i;
      }
    }
  }

  // Define game question and correct answer for the current round
  const gameQuestion = `${randInt1} ${randInt2}`;
  const correctAnswer = gcd;
  return [gameQuestion, correctAnswer];
};

const playGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  playGame(rules, getRoundData);
};
export default playGcdGame;
