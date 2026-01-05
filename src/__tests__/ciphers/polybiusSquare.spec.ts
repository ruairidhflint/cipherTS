import { polybiusSquare } from '../../ciphers/polybiusSquare';

describe('polybiusSquare', () => {
  test('expect valid string to correctly encrypt', () => {
    // h(23), e(15), l(31), l(31), o(34)
    expect(polybiusSquare.encrypt('hello')).toBe('2315313134');
    // j -> i
    // j(24), u(45), m(32), p(35)
    expect(polybiusSquare.encrypt('jump')).toBe('24453235');
  });

  test('expect valid string to correctly decrypt', () => {
    expect(polybiusSquare.decrypt('2315313134')).toBe('hello');
    expect(polybiusSquare.decrypt('24453235')).toBe('iump'); // j becomes i on decrypt
  });

  test('expect encrypt to handle spaces and casing', () => {
    expect(polybiusSquare.encrypt('Hello World')).toBe('23153131345234423114');
  });

  test('expect decrypt to handle separators or noise', () => {
    expect(polybiusSquare.decrypt('23 15 31 31 34')).toBe('hello');
  });

  test('expect decrypt to ignore invalid numbers', () => {
    // 66 is invalid, ignored.
    expect(polybiusSquare.decrypt('236615')).toBe('he');
  });

  test('expect empty string to throw on encrypt', () => {
    expect(() => polybiusSquare.encrypt('')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
