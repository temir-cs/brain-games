/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

// Gets user answer and converts its to program-readable type
export const getUserAnswer = () => {
  // Prompt a player for answer
  const input = readlineSync.question('Your answer: ');

  // return user input converted to lowercase
  return input.toLowerCase();
};

export const runEngine = (task, getRoundData) => {
  // Greet player and get playerName
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // Display game task
  const gameTask = task;
  console.log(gameTask);

  // Play 3 rounds unless user does a mistake
  for (let i = 0; i < 3; i += 1) {
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
      return console.log(`Let's try again, ${playerName}!`);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};
