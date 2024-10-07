import { rot13 } from '../../ciphers/rot13';

describe('rot13', () => {
  test('expect valid  string to correctly encrypt', () => {
    expect(rot13.encrypt('helloworld')).toBe('uryybjbeyq');
  });

  test('expect valid  string to correctly decrypt', () => {
    expect(rot13.decrypt('uryybjbeyq')).toBe('helloworld');
  });

  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(rot13.encrypt('hello world')).toBe('uryybjbeyq');
  });

  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(rot13.encrypt('HellowOrld')).toBe('uryybjbeyq');
  });

  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(rot13.decrypt('uryyb jbeyq')).toBe('helloworld');
  });

  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(rot13.decrypt('UryyBjbeyq')).toBe('helloworld');
  });

  test('expect empty string string to throw', () => {
    expect(() => rot13.encrypt('')).toThrow('Only valid alphabetic characters are permitted');
    expect(() => rot13.decrypt('')).toThrow('Only valid alphabetic characters are permitted');
  });

  test('expect string with invalid chars to throw', () => {
    expect(() => rot13.encrypt('helloworld1!')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => rot13.decrypt('helloworld1!')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
