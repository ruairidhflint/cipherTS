export const shiftCharsByN = (str: string, n: number): string => {
  if (str === '') {
    return str;
  }

  if (n < 0) {
    throw new Error('Shift value cannot be a negative integer');
  }

  if (str.length < n) {
    throw new Error('Shift value must be less than 27');
  }
  return str.substring(n, str.length) + str.substring(0, n);
};
