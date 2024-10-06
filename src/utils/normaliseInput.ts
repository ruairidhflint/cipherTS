export const normaliseInput = (input: string) => {
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(input)) {
    throw new Error('Only valid alphabetic characters are permitted');
  }
  return input.toLowerCase().replace(' ', '');
};
