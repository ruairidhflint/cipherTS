import { vigenere } from '../../ciphers/vigenere';

describe('vigenere', () => {
  test('expect valid string to correctly encrypt with valid keyword', () => {
    expect(vigenere.encrypt('helloworld', 'rory')).toBe('yscjfkfpcr');
    expect(vigenere.encrypt('helloworld', 'rebecca')).toBe('yimpqyoipe');
  });

  test('expect valid string to correctly decrypt with valid keyword', () => {
    expect(vigenere.decrypt('yscjfkfpcr', 'rory')).toBe('helloworld');
    expect(vigenere.decrypt('yimpqyoipe', 'rebecca')).toBe('helloworld');
  });

  test('expect keyword longer than plaintext to work', () => {
      expect(vigenere.encrypt('hi', 'abc')).toBe('hj');
      expect(vigenere.decrypt('hj', 'abc')).toBe('hi');
  });

  test('expect valid string with empty keyword to throw', () => {
     expect(() => vigenere.encrypt('hello', '')).toThrow(
       'Only valid alphabetic characters are permitted'
     );
     expect(() => vigenere.decrypt('hello', '')).toThrow(
       'Only valid alphabetic characters are permitted'
     );
  });

  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(vigenere.encrypt('hello world', 'rory')).toBe('yscjfkfpcr');
  });

  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(vigenere.encrypt('HellowOrld', 'rory')).toBe('yscjfkfpcr');
  });

  test('expect empty string string to throw', () => {
    expect(() => vigenere.encrypt('', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => vigenere.decrypt('', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });

  test('expect string with invalid chars to throw', () => {
    expect(() => vigenere.encrypt('helloworld1!', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
