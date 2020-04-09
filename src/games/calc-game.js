import { playGame } from '../index.js';

// 'Calculator' game

// Generate data for 1 game round
const getRoundData = () => {
  // Get 2 random integers and 1 random operation selector
  const randInt1 = Math.floor(Math.random() * 100);
  const randInt2 = Math.floor(Math.random() * 100);
  const operSelector = Math.floor(Math.random() * 3);
  // Define game question and correct answer for the current round
  let gameQuestion;
  let correctAnswer;

  // Set game question and correct answer based on selected operator
  switch (operSelector) {
    case 0:
      // Addition (+)
      gameQuestion = `${randInt1} + ${randInt2}`;
      correctAnswer = randInt1 + randInt2;
      break;
    case 1:
      // Subtraction (-)
      gameQuestion = `${randInt1} - ${randInt2}`;
      correctAnswer = randInt1 - randInt2;
      break;
    case 2:
      // Multiplication (*)
      gameQuestion = `${randInt1} * ${randInt2}`;
      correctAnswer = randInt1 * randInt2;
      break;
    default:
      break;
  }

  // Return game question and correct answer as array
  return [gameQuestion, correctAnswer];
};

// Set Rules and play the game
const playCalcGame = () => {
  const rules = 'What is the result of the expression?';
  playGame(rules, getRoundData);
};
export default playCalcGame;
