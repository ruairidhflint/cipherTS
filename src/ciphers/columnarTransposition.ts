import { withInputNormalization } from '../utils/withInputNormalization';

const encrypt = (plaintext: string, keyword: string) => {
  const len = plaintext.length;
  const keyLen = keyword.length;
  // keyword checked by normalization so keyLen > 0

  const chars = keyword.split('').map((char, i) => ({ char, i }));
  chars.sort((a, b) => a.char.localeCompare(b.char) || a.i - b.i);
  const order = chars.map((c) => c.i);

  let output = '';
  for (let k = 0; k < keyLen; k++) {
    const colIndex = order[k];
    for (let i = colIndex; i < len; i += keyLen) {
      output += plaintext[i];
    }
  }
  return output;
};

const decrypt = (ciphertext: string, keyword: string) => {
  const len = ciphertext.length;
  const keyLen = keyword.length;
  // keyword checked by normalization so keyLen > 0

  const chars = keyword.split('').map((char, i) => ({ char, i }));
  chars.sort((a, b) => a.char.localeCompare(b.char) || a.i - b.i);
  const order = chars.map((c) => c.i);

  const plainArray = new Array(len).fill('');
  const baseLen = Math.floor(len / keyLen);
  const remainder = len % keyLen;

  let currentIndex = 0;
  for (let k = 0; k < keyLen; k++) {
    const colIndex = order[k];
    const colLength = baseLen + (colIndex < remainder ? 1 : 0);

    for (let r = 0; r < colLength; r++) {
      const pIndex = r * keyLen + colIndex;
      plainArray[pIndex] = ciphertext[currentIndex++];
    }
  }

  return plainArray.join('');
};

export const columnarTransposition = {
  encrypt: withInputNormalization(encrypt),
  decrypt: withInputNormalization(decrypt),
};
