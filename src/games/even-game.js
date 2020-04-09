import { playGame } from '../index.js';

// 'Even numbers' game

// Generate data for 1 game round
const getRoundData = () => {
  // Get a random integer
  const randomInt = Math.floor(Math.random() * 100);
  // Form a game question
  const gameQuestion = randomInt;
  // Get correct answer - is number even or not
  const isEven = randomInt % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

const playEvenGame = () => {
  // Set Rules and play the game
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(rules, getRoundData);
};
export default playEvenGame;
