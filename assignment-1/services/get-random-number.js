export const getRandomNumber = (start, end) => {
  const range = end - start + 1;
  const logRange = Math.floor(Math.log2(range)) + 1;
  let randomBits = 0;

  for (let i = 0; i < logRange; i++) {
    randomBits = (randomBits << 1) | Math.round(Math.random());
  }

  return start + (randomBits % range);
};
