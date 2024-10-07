import { caesar } from '../../ciphers/caesar';

describe('caesar', () => {
  test('expect valid  string to correctly encrypt with valid shift', () => {
    expect(caesar.encrypt('helloworld', 1)).toBe('ifmmpxpsme');
    expect(caesar.encrypt('helloworld', 3)).toBe('khoorzruog');
    expect(caesar.encrypt('helloworld', 5)).toBe('mjqqtbtwqi');
    expect(caesar.encrypt('helloworld', 7)).toBe('olssvdvysk');
  });
  test('expect valid  string to correctly encrypt with valid shift', () => {
    expect(caesar.decrypt('ifmmpxpsme', 1)).toBe('helloworld');
    expect(caesar.decrypt('khoorzruog', 3)).toBe('helloworld');
    expect(caesar.decrypt('mjqqtbtwqi', 5)).toBe('helloworld');
    expect(caesar.decrypt('olssvdvysk', 7)).toBe('helloworld');
  });

  test('expect valid string with shift above 26 to throw', () => {
    expect(() => caesar.encrypt('helloworld', 27)).toThrow('Shift value must be less than 27');
  });

  test('expect valid string with shift less than 0 to throw', () => {
    expect(() => caesar.encrypt('helloworld', -1)).toThrow(
      'Shift value cannot be a negative integer',
    );
  });
  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(caesar.encrypt('hello world', 5)).toBe('mjqqtbtwqi');
  });
  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(caesar.encrypt('HellowOrld', 5)).toBe('mjqqtbtwqi');
  });
  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(caesar.decrypt('mjqqtb twqi', 5)).toBe('helloworld');
  });
  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(caesar.decrypt('MjqQtbtwqi', 5)).toBe('helloworld');
  });
  test('expect empty string string to throw', () => {
    expect(() => caesar.encrypt('', 5)).toThrow('Only valid alphabetic characters are permitted');
    expect(() => caesar.decrypt('', 5)).toThrow('Only valid alphabetic characters are permitted');
  });
  test('expect string with invalid chars to throw', () => {
    expect(() => caesar.encrypt('helloworld1!', 5)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => caesar.decrypt('helloworld1!', 5)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
