import readlineSync from 'readline-sync';

// Arithmetical progression game

const progressionGame = () => {
  // Define the first number and accumulator
  const firstNum = Math.floor(Math.random() * 100);
  const acc = Math.floor(Math.random() * 25);

  // Insert the first number into the sequence array
  const sequence = [firstNum];

  // Build a progression sequence
  for (let i = 0; i < 9; i += 1) {
    sequence.push(sequence[i] + acc);
  }

  // Randomly choose index to hide (from 0 to 9)
  const indexToHide = Math.floor(Math.random() * 10);

  // Save the number under that index
  const hiddenNum = sequence[indexToHide];

  // Insert '..' instead of that number and display question
  sequence.splice(indexToHide, 1, '..');
  console.log(`Question: ${sequence.join(' ')}`);

  // Promopt user for answer
  const answer = readlineSync.question('Your answer: ');

  // Check if answer is correct
  if (Number(answer) === hiddenNum) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${hiddenNum}".`);
    return false;
  }
  return true;
};

export default progressionGame;
