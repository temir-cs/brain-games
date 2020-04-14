/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

// Gets user answer and converts its to program-readable type
export const getUserAnswer = () => {
  // Prompt a player for answer
  const input = readlineSync.question('Your answer: ');

  // if answer is number -> convert a string to number
  if (!Number.isNaN(Number(input))) return Number(input);

  // otherwise -> just return user input converted to lowercase
  return input.toLowerCase();
};

export const runEngine = (rules, getRoundData) => {
  // Greet player and get playerName
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // Display game rules
  const gameRules = rules;
  console.log(gameRules);

  // Set canPlay condition and counter
  let canPlay = true;
  let counter = 0;

  // Play 3 rounds
  while (canPlay && counter < 3) {
    // Get generated game question and correct answer for a current game
    const [question, correctAnswer] = getRoundData();

    // Display a game question
    console.log(`Question: ${question}`);

    // Get user answer
    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      // if answer is correct -> show success message
      console.log('Correct!');
    } else {
      // if answer is incorrect -> show fail message and stop
      console.log(`"${userAnswer}" was wrong answer, correct answer was "${correctAnswer}".`);
      canPlay = false;
    }
    counter += 1;
  }
  // Check the winning condition
  canPlay ? console.log(`Congratulations, ${playerName}!`) : console.log(`Let's try again, ${playerName}!`);
};
