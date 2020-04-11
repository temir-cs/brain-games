import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Arithmetical progression' game

// Game rules
const rules = 'What number is missing in the progression?';

// Generate data for 1 game round
const getRoundData = () => {
  // Define the first number and accumulator
  const firstNum = getRandomInteger(100);
  const acc = getRandomInteger(25);

  // Insert the first number into the sequence array
  const sequence = [firstNum];

  // Build a progression sequence
  for (let i = 0; i < 9; i += 1) {
    sequence.push(sequence[i] + acc);
  }

  // Randomly choose index to hide (from 0 to 9)
  const indexToHide = getRandomInteger(10);

  // Save the number under that index
  const hiddenNum = sequence[indexToHide];

  // Insert '..' instead of that number and form a game question
  sequence.splice(indexToHide, 1, '..');
  const gameQuestion = sequence.join(' ');

  // Get a correct answer for current round
  const correctAnswer = hiddenNum;

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

const playProgressionGame = () => {
  runEngine(rules, getRoundData);
};
export default playProgressionGame;
