import readlineSync from 'readline-sync';

// 'Identify even numbers' game

const evenGame = () => {
  // Get a random integer and check whether it's even or not
  const randomInt = Math.floor(Math.random() * 100);
  const isEven = randomInt % 2 === 0;

  // Display question
  console.log(`Question: ${randomInt}`);

  // Prompt user for answer
  const answer = readlineSync.question('Your answer: ');

  if (isEven && answer === 'yes') {
    console.log('Correct!');
  } else if (!isEven && answer === 'no') {
    console.log('Correct!');
  } else {
    // If there is a wrong answer - stop the game
    return false;
  }
  return true;
};
export default evenGame;
