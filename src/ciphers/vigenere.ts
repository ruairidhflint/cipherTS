import { alphabet } from '../constants';
import { createTabulaRecta } from '../utils/createTabularRecta';

export const encrypt = (keyword: string, plaintext: string) => {
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
