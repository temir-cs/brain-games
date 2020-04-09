import { playGame } from '../index.js';

// 'Arithmetical progression' game

// Generate data for 1 game round
const getRoundData = () => {
  // Define the first number and accumulator
  const firstNum = Math.floor(Math.random() * 100);
  const acc = Math.floor(Math.random() * 25);

  // Insert the first number into the sequence array
  const sequence = [firstNum];

  // Build a progression sequence
  for (let i = 0; i < 9; i += 1) {
    sequence.push(sequence[i] + acc);
  }

  // Randomly choose index to hide (from 0 to 9)
  const indexToHide = Math.floor(Math.random() * 10);

  // Save the number under that index
  const hiddenNum = sequence[indexToHide];

  // Insert '..' instead of that number and form a game question
  sequence.splice(indexToHide, 1, '..');
  const gameQuestion = `${sequence.join(' ')}`;

  // Get a correct answer for current round
  const correctAnswer = hiddenNum;

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

const playProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  playGame(rules, getRoundData);
};
export default playProgressionGame;
