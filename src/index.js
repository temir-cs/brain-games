/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
import evenGame from './games/even-game.js';
import calcGame from './games/calc-game.js';

// Main game wrapper
const gameWrapper = (game) => {
  // Greet and prompt for name
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Set the canPlay condition and counter
  let canPlay = true;
  let counter = 0;

  // Display Game instructions
  switch (game) {
    case 'evenGame':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calcGame':
      console.log('What is the result of the expression?');
      break;
    default:
      break;
  }

  // Play game a selected 3 times, unless canPlay condition is false
  while (canPlay && counter < 3) {
    switch (game) {
      case 'evenGame':
        // If the answer is correct (game function returned true) - increase counter by 1
        // Otherwise (game function returned false) - stop the game
        evenGame() ? counter += 1 : canPlay = false;
        break;
      case 'calcGame':
        calcGame() ? counter += 1 : canPlay = false;
        break;
      default:
        console.log('No game was chosen!');
        console.log(`Let me remind you your name then. Your name is ${name}.`);
        canPlay = false;
    }
  }
  // Check whether the player can still play or not, if yes - congratulate, if no - ask to try again
  canPlay ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};
export default gameWrapper;
