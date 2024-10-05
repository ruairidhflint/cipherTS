import { alphabet } from '../../constants';
import { createTabulaRecta } from '../../utils/createTabularRecta';

describe('createTabulaRecta', () => {
  test('should contain all letters of the alphabet', () => {
    const tabular = createTabulaRecta();
    for (let i = 0; i < alphabet.length; i++) {
      expect(alphabet[i] in tabular).toBeTruthy();
    }
    expect(Object.keys(tabular).length).toBe(26);
  });

  test('all keys should map to correctly shifted alphabet', () => {
    const tabular = createTabulaRecta();
    expect(tabular.a).toBe('abcdefghijklmnopqrstuvwxyz');
    expect(tabular.b).toBe('bcdefghijklmnopqrstuvwxyza');
    expect(tabular.c).toBe('cdefghijklmnopqrstuvwxyzab');
    expect(tabular.d).toBe('defghijklmnopqrstuvwxyzabc');
    expect(tabular.e).toBe('efghijklmnopqrstuvwxyzabcd');
    expect(tabular.f).toBe('fghijklmnopqrstuvwxyzabcde');
    expect(tabular.g).toBe('ghijklmnopqrstuvwxyzabcdef');
    expect(tabular.h).toBe('hijklmnopqrstuvwxyzabcdefg');
    expect(tabular.i).toBe('ijklmnopqrstuvwxyzabcdefgh');
    expect(tabular.j).toBe('jklmnopqrstuvwxyzabcdefghi');
    expect(tabular.k).toBe('klmnopqrstuvwxyzabcdefghij');
    expect(tabular.l).toBe('lmnopqrstuvwxyzabcdefghijk');
    expect(tabular.m).toBe('mnopqrstuvwxyzabcdefghijkl');
    expect(tabular.n).toBe('nopqrstuvwxyzabcdefghijklm');
    expect(tabular.o).toBe('opqrstuvwxyzabcdefghijklmn');
    expect(tabular.p).toBe('pqrstuvwxyzabcdefghijklmno');
    expect(tabular.q).toBe('qrstuvwxyzabcdefghijklmnop');
    expect(tabular.r).toBe('rstuvwxyzabcdefghijklmnopq');
    expect(tabular.s).toBe('stuvwxyzabcdefghijklmnopqr');
    expect(tabular.t).toBe('tuvwxyzabcdefghijklmnopqrs');
    expect(tabular.u).toBe('uvwxyzabcdefghijklmnopqrst');
    expect(tabular.v).toBe('vwxyzabcdefghijklmnopqrstu');
    expect(tabular.w).toBe('wxyzabcdefghijklmnopqrstuv');
    expect(tabular.x).toBe('xyzabcdefghijklmnopqrstuvw');
    expect(tabular.y).toBe('yzabcdefghijklmnopqrstuvwx');
    expect(tabular.z).toBe('zabcdefghijklmnopqrstuvwxy');
  });
});
