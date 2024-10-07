import { alphabet } from '../constants';
import { CipherText, PlainText } from '../types';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: PlainText): CipherText => {
  let output = '';
  const reverseAlphabet = [...alphabet].reverse().join('');

  for (let i = 0; i < plaintext.length; i++) {
    output += reverseAlphabet[alphabet.indexOf(plaintext[i])];
  }
  return output;
};

export const atbash = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(encrypt),
};
