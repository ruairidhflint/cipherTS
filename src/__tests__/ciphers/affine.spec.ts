import { affine } from '../../ciphers/affine';

describe('affine', () => {
  test('expect valid string to correctly encrypt with valid a and b numbers', () => {
    expect(affine.encrypt('helloworld', 1, 10)).toBe('rovvygybvn');
    expect(affine.encrypt('helloworld', 3, 10)).toBe('fwrrayajrt');
    expect(affine.encrypt('helloworld', 5, 10)).toBe('tenncqcrnz');
    expect(affine.encrypt('helloworld', 11, 1)).toBe('atsszjzgsi');
    expect(affine.encrypt('helloworld', 11, 3)).toBe('cvuublbiuk');
    expect(affine.encrypt('helloworld', 11, 24)).toBe('xqppwgwdpf');
  });

  test('expect valid string to correctly decrypt with valid a and b numbers', () => {
    expect(affine.decrypt('rovvygybvn', 1, 10)).toBe('helloworld');
    expect(affine.decrypt('fwrrayajrt', 3, 10)).toBe('helloworld');
    expect(affine.decrypt('tenncqcrnz', 5, 10)).toBe('helloworld');
    expect(affine.decrypt('atsszjzgsi', 11, 1)).toBe('helloworld');
    expect(affine.decrypt('cvuublbiuk', 11, 3)).toBe('helloworld');
    expect(affine.decrypt('xqppwgwdpf', 11, 24)).toBe('helloworld');
  });

  test('expect an invalid "a" value to throw', () => {
    expect(() => affine.encrypt('helloworld', 0, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.encrypt('helloworld', -1, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.encrypt('helloworld', 30, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.encrypt('helloworld', 2, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.decrypt('helloworld', 0, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.decrypt('helloworld', -1, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.decrypt('helloworld', 30, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.decrypt('helloworld', 2, 1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
  });

  test('expect an invalid "b" value to throw', () => {
    expect(() => affine.encrypt('helloworld', 1, -1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.encrypt('helloworld', 1, 30)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.decrypt('helloworld', 1, -1)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
    expect(() => affine.decrypt('helloworld', 1, 30)).toThrow(
      'Both a and b must be positive integers below 26. In addition, a should have no common factors to 26',
    );
  });
  test('expect valid string with spaces to correctly encrypt without strings', () => {
    expect(affine.encrypt('hello world', 1, 1)).toBe('ifmmpxpsme');
  });
  test('expect valid string with uppercase chars to correctly encrypt in lowercase', () => {
    expect(affine.encrypt('HellowOrld', 1, 1)).toBe('ifmmpxpsme');
  });
  test('expect valid string with spaces to correctly decrypt without strings', () => {
    expect(affine.decrypt('ifmmpx psme', 1, 1)).toBe('helloworld');
  });
  test('expect valid string with uppercase chars to correctly decrypt in lowercase', () => {
    expect(affine.decrypt('iFmmPxpsMe', 1, 1)).toBe('helloworld');
  });
  test('expect empty string string to throw', () => {
    expect(() => affine.encrypt('', 1, 1)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => affine.decrypt('', 1, 1)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
  test('expect string with invalid chars to throw', () => {
    expect(() => affine.encrypt('helloworld1!', 1, 1)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => affine.decrypt('helloworld1!', 1, 1)).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
