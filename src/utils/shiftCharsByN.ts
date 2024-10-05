export const shiftCharsByN = (str: string, n: number): string => {
  if (str === '') {
    return str;
  }

  if (n < 0) {
    throw new Error('n cannot be a negative integer');
  }

  if (str.length < n) {
    throw new Error('String must be shorter than number of letters to shift');
  }
  return str.substring(n, str.length) + str.substring(0, n);
};
