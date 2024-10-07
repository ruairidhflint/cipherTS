import { substitution } from '../../ciphers/substitution';

describe('substitution', () => {
  test('expect valid  string to correctly encrypt with valid keyword', () => {
    expect(substitution.encrypt('helloworld', 'zebra')).toBe('fajjmvmpjr');
    expect(substitution.encrypt('helloworld', 'lion')).toBe('dahhmwmrhn');
  });

  test('expect valid  string to correctly encrypt with valid keyword that has duplicate letters', () => {
    expect(substitution.encrypt('helloworld', 'zebra')).toBe('fajjmvmpjr');
    expect(substitution.encrypt('helloworld', 'zebraa')).toBe('fajjmvmpjr');
  });
  test('expect valid  string to correctly decrypt with valid keyword', () => {
    expect(substitution.decrypt('fajjmvmpjr', 'zebra')).toBe('helloworld');
    expect(substitution.decrypt('dahhmwmrhn', 'lion')).toBe('helloworld');
  });

  test('expect valid  string to correctly decrypt with valid keyword that has duplicate letters', () => {
    expect(substitution.decrypt('fajjmvmpjr', 'zebra')).toBe('helloworld');
    expect(substitution.decrypt('fajjmvmpjr', 'zebraa')).toBe('helloworld');
  });

  test('expect valid string with keyword above 26 chars to throw', () => {
    expect(() => substitution.encrypt('helloworld', 'zmrokpwtnsxvuqjcefdbhilygaass')).toThrow(
      'Keyword cannot be longer than 26 chars',
    );
  });

  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(substitution.encrypt('hello world', 'zebra')).toBe('fajjmvmpjr');
  });
  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(substitution.encrypt('HellowOrld', 'zebra')).toBe('fajjmvmpjr');
  });
  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(substitution.decrypt('fajj mvmpjr', 'zebra')).toBe('helloworld');
  });
  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(substitution.decrypt('faJjmvmpjr', 'zebra')).toBe('helloworld');
  });
  test('expect empty string string to throw', () => {
    expect(() => substitution.encrypt('', 'zebra')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => substitution.decrypt('', 'zebra')).toThrow(
      'Only valid alphabetic characters are permitted',
    );

    expect(() => substitution.encrypt('helloworld', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => substitution.decrypt('helloworld', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
  test('expect string with invalid chars to throw', () => {
    expect(() => substitution.encrypt('helloworld1!', 'zebra')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => substitution.decrypt('helloworld1!', 'zebra')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
