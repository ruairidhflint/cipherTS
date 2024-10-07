import { alphabet } from '../constants';
import { createTabulaRecta } from '../utils/createTabularRecta';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: string, keyword: string) => {
  if (plaintext.length <= keyword.length && keyword.length < 27) {
    throw new Error(
      'For effective use, the keyword must be less than 27 chars and shorter than or equal to than the text to be encrypted',
    );
  }

  const tabula = createTabulaRecta();

  let cipherString = keyword;
  let i = 0;

  while (cipherString.length < plaintext.length) {
    cipherString += plaintext[i];
    i++;
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

const decrypt = (ciphertext: string, keyword: string) => {
  if (ciphertext.length <= keyword.length) {
    throw new Error('For effective use, the keyword must be shorter than the text to be decrypted');
  }

  const tabula = createTabulaRecta();

  let keyString = keyword;
  let i = 0;

  while (keyString.length < ciphertext.length) {
    const cipherLetter = ciphertext[i];
    const keyLetter = keyString[i];
    const row = tabula[keyLetter];
    const plainTextIndex = row.indexOf(cipherLetter);
    const plainTextLetter = alphabet[plainTextIndex];
    keyString += plainTextLetter;
    i++;
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

export const autokey = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};

console.log(encrypt('defendtheeastwallofthecastle', 'fortification'));
console.log(decrypt('iswxvibjexiggzeqpbimoigakmhe', 'fortification'));
