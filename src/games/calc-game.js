import readlineSync from 'readline-sync';

// 'Calculator' game

const calcGame = () => {
  // Get 2 random integers and 1 random operation selector
  const randInt1 = Math.floor(Math.random() * 100);
  const randInt2 = Math.floor(Math.random() * 100);
  const operSelector = Math.floor(Math.random() * 3);
  let result = 0;

  switch (operSelector) {
    case 0:
      // Addition (+)
      console.log(`Question: ${randInt1} + ${randInt2}`);
      result = randInt1 + randInt2;
      break;
    case 1:
      // Subtraction (-)
      console.log(`Question: ${randInt1} - ${randInt2}`);
      result = randInt1 - randInt2;
      break;
    case 2:
      // Multiplication (*)
      console.log(`Question: ${randInt1} * ${randInt2}`);
      result = randInt1 * randInt2;
      break;
    default:
      break;
  }

  // Prompt user for answer
  const answer = readlineSync.question('Your answer: ');

  // Convert the input to number and compare
  if (Number(answer) === result) {
    console.log('Correct!');
  } else {
    // If there is a wrong answer, stop the game
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    return false;
  }
  return true;
};
export default calcGame;
