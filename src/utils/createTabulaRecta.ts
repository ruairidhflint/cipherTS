import { alphabet } from '../constants';
import { shiftCharsByN } from './shiftCharsByN';

export const createTabulaRecta = () => {
  const tabula: { [key: string]: string } = {};

  for (let i = 0; i < alphabet.length; i++) {
    tabula[alphabet[i]] = shiftCharsByN(alphabet, i);
  }

  return tabula;
};
