import { shiftCharsByN } from '../../utils/shiftCharsByN';

describe('shiftCharsByN', () => {
  test('shifts characters correctly for positive n less than string length', () => {
    expect(shiftCharsByN('hello world', 3)).toBe('lo worldhel');
    expect(shiftCharsByN('abcdef', 2)).toBe('cdefab');
  });

  test('returns original string when n is 0', () => {
    expect(shiftCharsByN('hello world', 0)).toBe('hello world');
  });

  test('throws error when n is greater than or equal to string length', () => {
    expect(() => shiftCharsByN('abc', 4)).toThrow(
      'String must be shorter than number of letters to shift',
    );
  });

  test('works with empty string', () => {
    expect(shiftCharsByN('', 0)).toBe('');
  });

  test('handles single character string', () => {
    expect(shiftCharsByN('a', 0)).toBe('a');
    expect(shiftCharsByN('a', 1)).toBe('a');
  });

  test('works with special characters and spaces', () => {
    expect(shiftCharsByN('hello, world!', 5)).toBe(', world!hello');
  });

  test('throws error for negative n', () => {
    expect(() => shiftCharsByN('hello world', -3)).toThrow('n cannot be a negative integer');
  });
});
