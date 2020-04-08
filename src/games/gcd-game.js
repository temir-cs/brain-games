import readlineSync from 'readline-sync';

// 'Greatest common divisor' game

const gcdGame = () => {
  // Define 2 random numbers
  const randInt1 = Math.floor(Math.random() * 100);
  const randInt2 = Math.floor(Math.random() * 100);
  // Identify smaller and larger number
  const minNum = Math.min(randInt1, randInt2);
  const maxNum = Math.max(randInt1, randInt2);
  // Find the middle boundary for 'for' loop to stop
  const middle = Math.floor(minNum / 2);
  // Define gcd, set to 0
  let gcd = 0;

  console.log(`Question: ${randInt1} ${randInt2}`);

  // if larger number divided by smaller has 0 divisor - gcd is a smaller number
  if (maxNum % minNum === 0) {
    gcd = minNum;
  } else {
    // else iterate trough both numbers and find common divisors
    for (let i = 1; i <= middle; i += 1) {
      if (maxNum % i === 0 && minNum % i === 0) {
        gcd = i;
      }
    }
  }

  // Prompt user for input
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === gcd) {
    // if answer is correct - continue
    console.log('Correct!');
  } else {
    // if answer is incorrect - stop the game (return false)
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gcd}".`);
    return false;
  }
  return true;
};

export default gcdGame;
