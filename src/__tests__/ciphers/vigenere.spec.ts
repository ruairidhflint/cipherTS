import { vigenere } from '../../ciphers/vigenere';

describe('vigenere', () => {
  test('expect valid  string to correctly encrypt with valid keyword', () => {
    expect(vigenere.encrypt('helloworld', 'rory')).toBe('yscjfkfpcr');
    expect(vigenere.encrypt('helloworld', 'rebecca')).toBe('yimpqyoipe');
  });

  test('expect valid  string to correctly decrypt with valid keyword', () => {
    expect(vigenere.decrypt('yscjfkfpcr', 'rory')).toBe('helloworld');
    expect(vigenere.decrypt('yimpqyoipe', 'rebecca')).toBe('helloworld');
  });

  test('expect a keyword longer than or equal to the valid input to throw', () => {
    expect(() => vigenere.encrypt('helloworld', 'helloworld')).toThrow(
      'For effective use, the keyword must be shorter than the text to be encrypted',
    );
    expect(() => vigenere.decrypt('helloworld', 'helloworldhello')).toThrow(
      'For effective use, the keyword must be shorter than the text to be decrypted',
    );
  });

  test('expect valid string with empty keyword to throw', () => {
    expect(() => vigenere.encrypt('helloworld', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(vigenere.encrypt('hello world', 'rory')).toBe('yscjfkfpcr');
  });
  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(vigenere.encrypt('HellowOrld', 'rory')).toBe('yscjfkfpcr');
  });
  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(vigenere.decrypt('yscjf kfpcr', 'rory')).toBe('helloworld');
  });
  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(vigenere.decrypt('yScjFkfpcr', 'rory')).toBe('helloworld');
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
    expect(() => vigenere.decrypt('helloworld1!', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
