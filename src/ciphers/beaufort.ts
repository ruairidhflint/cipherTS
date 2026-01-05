import { alphabet } from '../constants';
import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: string, keyword: string) => {
  // keyword checked by normalization
  let output = '';

  for (let i = 0; i < plaintext.length; i++) {
    const pIdx = alphabet.indexOf(plaintext[i]);
    const kIdx = alphabet.indexOf(keyword[i % keyword.length]);

    const cIdx = (kIdx - pIdx + 26) % 26;
    output += alphabet[cIdx];
  }
  return output;
};

const decrypt = (ciphertext: string, keyword: string) => {
  return encrypt(ciphertext, keyword);
};

export const beaufort = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};
