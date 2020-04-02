import readlineSync from 'readline-sync';

// 'Identify even numbers' game

const primeGame = () => {
  // Get a random integer and find it middle boundary for 'for' loop
  const randomInt = Math.floor(Math.random() * 100);
  const middle = Math.floor(randomInt / 2);

  // Assume that a given number is prime by default
  let isPrime = true;

  // Check if a number is 1. If it is - then its NOT prime
  if (randomInt === 1) {
    isPrime = false;
  } else {
    // Iterate trough all smaller numbers beginning from 2 until middle boundary
    for (let i = 2; i <= middle; i += 1) {
      // if the given number has any divisor other than 1 and itself - then it's NOT prime
      if (randomInt % i === 0) {
        isPrime = false;
      }
    }
  }


  // Display question
  console.log(`Question: ${randomInt}`);

  // Prompt user for answer
  const answer = readlineSync.question('Your answer: ');

  if (isPrime === true && answer === 'yes') {
    console.log('Correct!');
  } else if (isPrime === false && answer === 'no') {
    console.log('Correct!');
  } else {
    // If there is a wrong answer - stop the game
    return false;
  }
  return true;
};
export default primeGame;
