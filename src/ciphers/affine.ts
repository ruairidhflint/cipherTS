import { alphabet } from '../constants';
import { CipherText, PlainText } from '../types';
import { withInputNormalization } from '../utils/withInputNormalization';

const relativePrimes = [1, 3, 5, 7, 8, 11, 15, 17, 19, 21, 23, 25];

const alphabetDictionary = [...alphabet].reduce(
  (acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
  },
  {} as { [key: string]: number },
);

const encrypt = (plaintext: PlainText, a: number, b: number): CipherText => {
  if (a < 0 || b <= 0 || a > 25 || b > 25 || !relativePrimes.includes(a)) {
    throw new Error(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
  }

  let output = '';

  for (let i = 0; i < plaintext.length; i++) {
    const letter = (a * alphabetDictionary[plaintext[i]] + b) % alphabet.length;
    output += alphabet[letter];
  }

  return output;
};

const decrypt = (ciphertext: CipherText, a: number, b: number): PlainText => {
  if (a < 0 || b <= 0 || a > 25 || b > 25 || !relativePrimes.includes(a)) {
    throw new Error(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
  }

  // Find the modular multiplicative inverse of a
  let aInverse = 0;
  for (let i = 0; i < 26; i++) {
    if ((a * i) % 26 === 1) {
      aInverse = i;
      break;
    }
  }

  let output = '';

  for (let i = 0; i < ciphertext.length; i++) {
    const index = alphabet.indexOf(ciphertext[i]);
    const letter = (aInverse * (index - b + 26)) % 26;
    output += Object.keys(alphabetDictionary).find((key) => alphabetDictionary[key] === letter);
  }

  return output;
};

export const affine = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};
