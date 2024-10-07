import { alphabet } from '../constants';
import { CipherText, PlainText } from '../types';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: PlainText, keyword: string): CipherText => {
  if (keyword.length > 26) {
    throw new Error('Keyword cannot be longer than 26 chars');
  }

  const keywordWithoutDuplicates = [...new Set(keyword)].join('');

  let adjustedAlphabet = '';
  for (let i = 0; i < alphabet.length; i++) {
    if (!keywordWithoutDuplicates.includes(alphabet[i])) {
      adjustedAlphabet += alphabet[i];
    }
  }
  adjustedAlphabet = keyword + adjustedAlphabet;

  let output = '';

  for (let i = 0; i < plaintext.length; i++) {
    output += adjustedAlphabet[alphabet.indexOf(plaintext[i])];
  }
  return output;
};

const decrypt = (ciphertext: CipherText, keyword: string): PlainText => {
  if (keyword.length > 26) {
    throw new Error('Keyword cannot be longer than 26 chars');
  }

  const keywordWithoutDuplicates = [...new Set(keyword)].join('');

  let adjustedAlphabet = '';
  for (let i = 0; i < alphabet.length; i++) {
    if (!keywordWithoutDuplicates.includes(alphabet[i])) {
      adjustedAlphabet += alphabet[i];
    }
  }
  adjustedAlphabet = keyword + adjustedAlphabet;

  let output = '';

  for (let i = 0; i < ciphertext.length; i++) {
    output += alphabet[adjustedAlphabet.indexOf(ciphertext[i])];
  }
  return output;
};

export const substitution = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};
