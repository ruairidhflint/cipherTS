import { alphabet } from '../constants';
import { createTabulaRecta } from '../utils/createTabulaRecta';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: string, keyword: string) => {
  // keyword checked by normalization
  const tabula = createTabulaRecta();
  let output = '';

  for (let i = 0; i < plaintext.length; i++) {
    const letter = plaintext[i];
    const keyLetter = keyword[i % keyword.length];
    const indexInTabula = alphabet.indexOf(keyLetter);
    output += tabula[letter][indexInTabula];
  }
  return output;
};

const decrypt = (ciphertext: string, keyword: string) => {
  // keyword checked by normalization
  const tabula = createTabulaRecta();
  let output = '';

  for (let i = 0; i < ciphertext.length; i++) {
    const cipherLetter = ciphertext[i];
    const keyLetter = keyword[i % keyword.length];
    const row = tabula[keyLetter];
    const plainTextIndex = row.indexOf(cipherLetter);
    output += alphabet[plainTextIndex];
  }

  return output;
};

export const vigenere = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};
