export const countChars = (str) => {
  let stringCount = 0;
  let numberCount = 0;
  let symbolCount = 0;

  [...str].forEach((char) => {
    if (/\d/.test(char)) {
      numberCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      stringCount++;
    } else {
      symbolCount++;
    }
  });

  return { stringCount, numberCount, symbolCount };
};
