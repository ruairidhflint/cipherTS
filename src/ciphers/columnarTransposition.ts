import { alphabet } from '../constants';
import { CipherText, PlainText } from '../types';
import { shiftCharsByN } from '../utils/shiftCharsByN';

const encrypt = (plaintext: PlainText, keyword: string): CipherText => {
  let output = '';
  return output;
};

export const columnarTransposition = {
  encrypt: encrypt,
  decrypt: encrypt,
};
