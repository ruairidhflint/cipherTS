import { beaufort } from '../../ciphers/beaufort';

describe('beaufort', () => {
  test('expect valid string to correctly encrypt with valid keyword', () => {
    expect(beaufort.encrypt('hello', 'key')).toBe('danzq');
  });

  test('expect valid string to correctly decrypt with valid keyword', () => {
    expect(beaufort.decrypt('danzq', 'key')).toBe('hello');
  });

  test('expect valid string with spaces to correctly encrypt without spaces', () => {
    // helloworld encrypted with key repeats: keykeykeyk
    // Expected: danzqcwnnh (verified manually)
    expect(beaufort.encrypt('hello world', 'key')).toBe('danzqcwnnh');
  });

  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(beaufort.encrypt('Hello', 'Key')).toBe('danzq');
  });

  test('expect empty keyword to throw', () => {
    expect(() => beaufort.encrypt('hello', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => beaufort.decrypt('hello', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });

  test('expect empty string string to throw', () => {
    expect(() => beaufort.encrypt('', 'key')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => beaufort.decrypt('', 'key')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });

  test('expect string with invalid chars to throw', () => {
    expect(() => beaufort.encrypt('hello123', 'key')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
