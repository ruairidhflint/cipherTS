import { CipherText, PlainText } from '../types';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: PlainText, rails: number) => {
  if (rails < 2) {
    throw new Error('Number of rails must be 2 or greater');
  }

  if (rails >= plaintext.length) {
    throw new Error('Number of rails must be fewer than the plaintext length');
  }

  const fence: string[][] = Array(rails)
    .fill(null)
    .map(() => Array(plaintext.length).fill('-'));

  let rail = 0;
  let dirDown = true;

  for (let i = 0; i < plaintext.length; i++) {
    fence[rail][i] = plaintext[i];
    if (rail === 0 && !dirDown) {
      dirDown = true;
      rail++;
      continue;
    }
    if (rail === rails - 1 && dirDown) {
      dirDown = false;
      rail--;
      continue;
    }
    if (dirDown) {
      rail++;
      continue;
    }
    rail--;
  }

  return fence.map((arr) => arr.filter((x) => x !== '-').join('')).join('');
};

const decrypt = (ciphertext: CipherText, rails: number) => {
  if (rails < 2) {
    throw new Error('Number of rails must be 2 or greater');
  }

  if (rails >= ciphertext.length) {
    throw new Error('Number of rails must be fewer than the ciphertext length');
  }

  const fence: string[][] = Array(rails)
    .fill(null)
    .map(() => Array(ciphertext.length).fill('-'));

  let rail = 0;
  let dirDown = true;

  for (let i = 0; i < ciphertext.length; i++) {
    fence[rail][i] = '*';
    if (rail === 0 && !dirDown) {
      dirDown = true;
      rail++;
      continue;
    }
    if (rail === rails - 1 && dirDown) {
      dirDown = false;
      rail--;
      continue;
    }
    if (dirDown) {
      rail++;
      continue;
    }
    rail--;
  }

  let index = 0;
  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < ciphertext.length; j++) {
      if (fence[i][j] === '*') {
        fence[i][j] = ciphertext[index++];
      }
    }
  }

  let result = '';
  rail = 0;
  dirDown = true;

  for (let i = 0; i < ciphertext.length; i++) {
    result += fence[rail][i];
    if (rail === 0 && !dirDown) {
      dirDown = true;
      rail++;
      continue;
    }
    if (rail === rails - 1 && dirDown) {
      dirDown = false;
      rail--;
      continue;
    }
    if (dirDown) {
      rail++;
      continue;
    }
    rail--;
  }

  return result;
};

export const railFence = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};
