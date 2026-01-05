import { withInputNormalization } from '../utils/withInputNormalization';

const alphabetGrid = [
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'k'],
  ['l', 'm', 'n', 'o', 'p'],
  ['q', 'r', 's', 't', 'u'],
  ['v', 'w', 'x', 'y', 'z'],
];

const encrypt = (plaintext: string) => {
  let output = '';
  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];
    if (char === 'j') char = 'i';

    let found = false;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (alphabetGrid[r][c] === char) {
          output += `${r + 1}${c + 1}`;
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }
  return output;
};

const decrypt = (ciphertext: string) => {
  const cleaned = ciphertext.replace(/[^1-5]/g, '');

  let output = '';
  for (let i = 0; i < cleaned.length; i += 2) {
    const r = parseInt(cleaned[i]) - 1;
    const c = parseInt(cleaned[i + 1]) - 1;
    if (r >= 0 && r < 5 && c >= 0 && c < 5) {
      output += alphabetGrid[r][c];
    }
  }
  return output;
};

export const polybiusSquare = {
  encrypt: withInputNormalization(encrypt),
  decrypt,
};
