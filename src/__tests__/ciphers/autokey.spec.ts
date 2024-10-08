import { autokey } from '../../ciphers/autokey';

describe('autokey', () => {
  test('expect valid  string to correctly encrypt with valid keyword', () => {
    expect(autokey.encrypt('helloworld', 'rory')).toBe('yscjvazczz');
    expect(autokey.encrypt('helloworld', 'rebecca')).toBe('yimpqyoypo');
  });

  test('expect valid  string to correctly decrypt with valid keyword', () => {
    expect(autokey.decrypt('yscjvazczz', 'rory')).toBe('helloworld');
    expect(autokey.decrypt('yimpqyoypo', 'rebecca')).toBe('helloworld');
  });

  test('expect a keyword longer than or equal to the valid input to throw', () => {
    expect(() => autokey.encrypt('helloworld', 'helloworld')).toThrow(
      'For effective use, the keyword must be less than 27 chars and shorter than or equal to than the text to be encrypted',
    );
    expect(() => autokey.decrypt('helloworld', 'helloworldhello')).toThrow(
      'For effective use, the keyword must be less than 27 chars and shorter than or equal to than the text to be encrypted',
    );
  });

  test('expect valid string with empty keyword to throw', () => {
    expect(() => autokey.encrypt('helloworld', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(autokey.encrypt('hello world', 'rory')).toBe('yscjvazczz');
  });
  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(autokey.encrypt('HellowOrld', 'rory')).toBe('yscjvazczz');
  });
  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(autokey.decrypt('yscjv azczz', 'rory')).toBe('helloworld');
  });
  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(autokey.decrypt('yScJvaZczz', 'rory')).toBe('helloworld');
  });
  test('expect empty string string to throw', () => {
    expect(() => autokey.encrypt('', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => autokey.decrypt('', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
  test('expect string with invalid chars to throw', () => {
    expect(() => autokey.encrypt('helloworld1!', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => autokey.decrypt('helloworld1!', 'rory')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
