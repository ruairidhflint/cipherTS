import { atbash } from '../../ciphers/atbash';

describe('atbash', () => {
  test('expect valid  string to correctly encrypt', () => {
    expect(atbash.encrypt('helloworld')).toBe('svooldliow');
  });

  test('expect valid  string to correctly encrypt', () => {
    expect(atbash.decrypt('svooldliow')).toBe('helloworld');
  });

  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(atbash.encrypt('hello world')).toBe('svooldliow');
  });

  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(atbash.encrypt('HellowOrld')).toBe('svooldliow');
  });

  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(atbash.decrypt('svool dliow')).toBe('helloworld');
  });

  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(atbash.decrypt('SvooLDliow')).toBe('helloworld');
  });

  test('expect empty string string to throw', () => {
    expect(() => atbash.encrypt('')).toThrow('Only valid alphabetic characters are permitted');
    expect(() => atbash.decrypt('')).toThrow('Only valid alphabetic characters are permitted');
  });

  test('expect string with invalid chars to throw', () => {
    expect(() => atbash.encrypt('helloworld1!')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => atbash.decrypt('helloworld1!')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
