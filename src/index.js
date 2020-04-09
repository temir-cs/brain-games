/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

// Gets user answer and converts its to program-readable type
export const getUserAnswer = () => {
  // Prompt a player for answer
  const input = readlineSync.question('Your answer: ');

  // Yes answers could  be 'Yes' 'yes' 'Y' 'y'
  const yesAnswers = 'Yesyes';

  // No answers could be 'No' 'no' 'N' 'n'
  const noAnswers = 'Nono';

  // if answer is Yes/yes/Y/y -> make it 'yes'
  if (yesAnswers.includes(input)) return 'yes';

  // if answer is No/no/N/n -> make it 'no'
  if (noAnswers.includes(input)) return 'no';

  // if answer is number -> convert a string to number
  if (!Number.isNaN(Number(input))) return Number(input);

  // otherwise -> just return user input
  return input;
};

export const playRound = (gameQuestion, correctAnswer) => {
  // Display a game question
  console.log(`Question: ${gameQuestion}`);

  // Get user answer
  const userAnswer = getUserAnswer();

  if (userAnswer === correctAnswer) {
    // if answer is correct -> show success message
    console.log('Correct!');
  } else {
    // if answer is incorrect -> show fail message and stop
    console.log(`"${userAnswer}" was wrong answer, correct answer was "${correctAnswer}".`);
    return false;
  }
  return true;
};

export const playGame = (rules, getRoundData) => {
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
    // Get generated game question and correct answer
    const [gameQuestion, correctAnswer] = getRoundData();
    canPlay = playRound(gameQuestion, correctAnswer);
    counter += 1;
  }
  // Check the winning condition
  canPlay ? console.log(`Congratulations, ${playerName}!`) : console.log(`Let's try again, ${playerName}!`);
};
