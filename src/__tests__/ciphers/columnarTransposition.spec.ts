import { columnarTransposition } from '../../ciphers/columnarTransposition';

describe('columnarTransposition', () => {
  test('expect valid string to correctly encrypt', () => {
    expect(columnarTransposition.encrypt('defendtheeastwallofthecastle', 'german')).toBe(
      'nalcehwttdttfseeleedsoafeahl',
    );
  });

  test('expect valid string to correctly decrypt', () => {
    expect(columnarTransposition.decrypt('nalcehwttdttfseeleedsoafeahl', 'german')).toBe(
      'defendtheeastwallofthecastle',
    );
  });

  test('expect empty keyword to throw', () => {
    expect(() => columnarTransposition.encrypt('hello', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => columnarTransposition.decrypt('hello', '')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });

  test('expect valid string with spaces to correctly encrypt without spaces', () => {
    // defend the east wall -> defendtheeastwall
    // key: german (6 chars)
    // Encrypted: nalehwdtteeldsfea
    expect(columnarTransposition.encrypt('defend the east wall', 'german')).toBe(
      'nalehwdtteeldsfea',
    );
  });

  test('expect key with duplicate characters to encrypt correctly (stable sort)', () => {
    // hello world -> helloworld (10 chars)
    // key: banana (6 chars)
    // order: b(0), a(1), n(2), a(3), n(4), a(5)
    // sorted: a(1), a(3), a(5), b(0), n(2), n(4) -> 1, 3, 5, 0, 2, 4
    // result: erldwhollo (calculated manually)
    expect(columnarTransposition.encrypt('hello world', 'banana')).toBe('erldwhollo');
    expect(columnarTransposition.decrypt('erldwhollo', 'banana')).toBe('helloworld');
  });

  test('expect empty string string to throw', () => {
    expect(() => columnarTransposition.encrypt('', 'key')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
  });
});
