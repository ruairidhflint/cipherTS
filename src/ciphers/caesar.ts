import { alphabet } from '../constants';
import { CipherText, PlainText } from '../types';
import { shiftCharsByN } from '../utils/shiftCharsByN';

const encrypt = (plaintext: PlainText, shift: number): CipherText => {
  let output = '';
  const shifted = shiftCharsByN(alphabet, shift);

  for (let i = 0; i < plaintext.length; i++) {
    output += shifted[alphabet.indexOf(plaintext[i])];
  }
  return output;
};

const decrypt = (ciphertext: CipherText, shift: number): CipherText => {
  let output = '';
  const shifted = shiftCharsByN(alphabet, 26 - shift);

  for (let i = 0; i < ciphertext.length; i++) {
    output += shifted[alphabet.indexOf(ciphertext[i])];
  }
  return output;
};

export const caesar = {
  encrypt,
  decrypt,
};
