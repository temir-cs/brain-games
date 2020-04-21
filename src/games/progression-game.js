import { runEngine } from '../index.js';
import getRandomInteger from '../utils.js';

// 'Arithmetical progression' game

// Game task
const task = 'What number is missing in the progression?';

// Define the progression length
const progressionLength = 10;

const makeProgressionSequence = (first, step) => {
  // Initiate the sequence and insert the first number into the sequence array
  const sequence = [first];
  // Add the rest of the numbers to the progression sequence
  for (let i = 0; i < progressionLength - 1; i += 1) {
    sequence.push(sequence[i] + step);
  }
  return sequence;
};

// Generate data for 1 game round
const getRoundData = () => {
  // Define the first number and accumulator
  const first = getRandomInteger(0, 100);
  const step = getRandomInteger(0, 25);
  // Randomly choose index of the element to be hidden
  const hiddenNumberIndex = getRandomInteger(0, progressionLength - 1);

  // Build a progression sequence
  const sequence = makeProgressionSequence(first, step);

  // Get a correct answer and a game question
  const correctAnswer = String(sequence[hiddenNumberIndex]);

  // Insert '..' instead of the number under the given index
  sequence[hiddenNumberIndex] = '..';

  const question = sequence.join(' ');

  // Return game question and correct answer as array
  return [question, correctAnswer];
};
// Start the game engine and play the game
export default () => {
  runEngine(task, getRoundData);
};
