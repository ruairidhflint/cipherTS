import { railFence } from '../../ciphers/railFence';

describe('railFence', () => {
  test('expect valid string to correctly encrypt', () => {
    expect(railFence.encrypt('helloworld', 3)).toBe('holelwrdlo');
    expect(railFence.encrypt('helloworld', 5)).toBe('hlerdlolwo');
    expect(railFence.encrypt('helloworld', 9)).toBe('hellowordl');
  });

  test('expect valid string to correctly decrypt', () => {
    expect(railFence.decrypt('holelwrdlo', 3)).toBe('helloworld');
    expect(railFence.decrypt('hlerdlolwo', 5)).toBe('helloworld');
    expect(railFence.decrypt('hellowordl', 9)).toBe('helloworld');
  });

  test('expect rails >= plaintext length to return plaintext', () => {
      // The implementation allows rails >= length now.
      // If rails >= length, it just writes diagonal down and that's it.
      // "hi", rails 5.
      // h . . . .
      // . i . . .
      // . . . . .
      // read rows: hi
      expect(railFence.encrypt('hi', 5)).toBe('hi');
      expect(railFence.decrypt('hi', 5)).toBe('hi');
  });

  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(railFence.encrypt('hello world', 3)).toBe('holelwrdlo');
  });

  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(railFence.encrypt('HellowOrld', 3)).toBe('holelwrdlo');
  });

  test('expect valid string with invalid rails number to throw', () => {
    expect(() => railFence.encrypt('helloworld', 1)).toThrow(
      'Number of rails must be 2 or greater',
    );
    expect(() => railFence.decrypt('helloworld', 1)).toThrow(
      'Number of rails must be 2 or greater',
    );
  });

  test('expect empty string string to throw', () => {
    expect(() => railFence.encrypt('', 3)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => railFence.decrypt('', 3)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
