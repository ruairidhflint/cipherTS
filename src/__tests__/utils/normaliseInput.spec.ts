import { normaliseInput } from '../../utils/normaliseInput';

describe('normaliseInput', () => {
  test('normalised input should remain unchanged', () => {
    const nornalised = normaliseInput('helloworld');
    expect(nornalised).toBe('helloworld');
  });
  test('input with uppercase letters returns lowercased', () => {
    const nornalised = normaliseInput('HelloWorld');
    expect(nornalised).toBe('helloworld');
  });
  test('input with whitespace returns without whitespace', () => {
    const nornalised = normaliseInput('hello world');
    expect(nornalised).toBe('helloworld');
  });

  test('input with uppercase chars and whitespace returns normalised', () => {
    const nornalised = normaliseInput('HeLlo WOrld');
    expect(nornalised).toBe('helloworld');
  });
  test('input with non-alphabet chars returns valid error', () => {
    expect(() => normaliseInput('HeLlo WOrld!')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => normaliseInput('HeLlo WOrld1234')).toThrow(
      'Only valid alphabetic characters are permitted',
    );
    expect(() => normaliseInput('! 8 &')).toThrow('Only valid alphabetic characters are permitted');
  });
});
