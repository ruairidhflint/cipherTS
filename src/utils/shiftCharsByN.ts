export const shiftCharsByN = (str: string, n: number): string => {
  return str.substring(n, str.length) + str.substring(0, n);
};
