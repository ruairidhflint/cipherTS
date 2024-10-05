import { alphabet } from '../constants';
import { createTabulaRecta } from '../utils/createTabularRecta';

const encrypt = (keyword: string, plaintext: string) => {
  if (plaintext.length <= keyword.length) {
    throw new Error('For effective use, the keyword must be shorter than the text to be encrypted');
  }

  const tabula = createTabulaRecta();

  let cipherString = keyword;

  while (cipherString.length < plaintext.length) {
    const remaining = plaintext.length - cipherString.length;
    if (remaining >= keyword.length) {
      cipherString += keyword;
    } else {
      cipherString += keyword.substring(0, remaining);
    }
  }

  let output = '';

  for (let i = 0; i < plaintext.length; i++) {
    const letter = plaintext[i];
    const correspondingLetter = cipherString[i];
    const indexInTabula = alphabet.indexOf(correspondingLetter);
    output += tabula[letter][indexInTabula];
  }
  return output;
};

const decrypt = (keyword: string, ciphertext: string) => {
  if (ciphertext.length <= keyword.length) {
    throw new Error('For effective use, the keyword must be shorter than the text to be decrypted');
  }

  const tabula = createTabulaRecta();

  let keyString = keyword;

  while (keyString.length < ciphertext.length) {
    const remaining = ciphertext.length - keyString.length;
    if (remaining >= keyword.length) {
      keyString += keyword;
    } else {
      keyString += keyword.substring(0, remaining);
    }
  }

  let output = '';

  for (let i = 0; i < ciphertext.length; i++) {
    const cipherLetter = ciphertext[i];
    const keyLetter = keyString[i];
    const row = tabula[keyLetter];
    const plainTextIndex = row.indexOf(cipherLetter);
    output += alphabet[plainTextIndex];
  }

  return output;
};

export const vigenere = {
  encrypt: encrypt,
  decrypt: decrypt,
};
