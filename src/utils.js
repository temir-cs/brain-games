// Get a random integer between specified values
const getRandomInteger = (min = 0, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};
export default getRandomInteger;
