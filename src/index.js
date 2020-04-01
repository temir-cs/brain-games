import readlineSync from 'readline-sync';

export const askNameAndGreet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomInt = Math.floor(Math.random() * 100);
    const isEven = randomInt % 2 === 0;
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
