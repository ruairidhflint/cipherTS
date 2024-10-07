import { alphabet } from '../constants';
import { CipherText, PlainText } from '../types';
import { shiftCharsByN } from '../utils/shiftCharsByN';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: PlainText): CipherText => {
  let output = '';
  const shifted = shiftCharsByN(alphabet, 13);

  for (let i = 0; i < plaintext.length; i++) {
    output += shifted[alphabet.indexOf(plaintext[i])];
  }
  return output;
};

export const rot13 = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(encrypt),
};
