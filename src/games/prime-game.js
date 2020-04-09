import { playGame } from '../index.js';

// 'Prime number' game

// Generate data for 1 game round
const getRoundData = () => {
  // Get a random integer and find it middle boundary for 'for' loop
  const randomInt = Math.floor(Math.random() * 100);
  const middle = Math.floor(randomInt / 2);

  // Assume that a given number is prime by default
  let isPrime = true;

  // Check if a number is 1. If it is - then its NOT prime
  if (randomInt === 1) {
    isPrime = false;
  } else {
    // Iterate trough all smaller numbers beginning from 2 until middle boundary
    for (let i = 2; i <= middle; i += 1) {
      // if the given number has any divisor other than 1 and itself - then it's NOT prime
      if (randomInt % i === 0) {
        isPrime = false;
      }
    }
  }

  // Form a game question and correct answer
  const gameQuestion = `${randomInt}`;
  const correctAnswer = isPrime ? 'yes' : 'no';

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

const playPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(rules, getRoundData);
};
export default playPrimeGame;
