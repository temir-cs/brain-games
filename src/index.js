/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import evenGame from './games/even-game.js';
import calcGame from './games/calc-game.js';
import gcdGame from './games/gcd-game.js';

// Main game wrapper
const gameWrapper = (game) => {
  // Greet and prompt for name
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Set the canPlay condition and counter
  let canPlay = true;
  let counter = 0;
  let currentGame;

  // Display Game instructions
  switch (game) {
    case 'evenGame':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calcGame':
      console.log('What is the result of the expression?');
      break;
    case 'gcdGame':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    default:
      break;
  }

  // Play game a selected 3 times, unless canPlay condition is false
  while (canPlay && counter < 3) {
    // Decide which game to launch
    switch (game) {
      case 'evenGame':
        currentGame = evenGame();
        break;
      case 'calcGame':
        currentGame = calcGame();
        break;
      case 'gcdGame':
        currentGame = gcdGame();
        break;
      default:
        console.log('No game was chosen!');
        console.log(`Let me remind you your name then. Your name is ${name}.`);
        canPlay = false;
    }
    // If the answer is correct (game function returned true) - increase counter and continue game
    // Otherwise (game function returned false) - stop the game
    currentGame ? counter += 1 : canPlay = false;
  }
  // Check whether the player can still play or not, if yes - congratulate, if no - ask to try again
  canPlay ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};
export default gameWrapper;
