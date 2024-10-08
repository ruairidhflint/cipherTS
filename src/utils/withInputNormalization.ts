import { normaliseInput } from './normaliseInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

export function withInputNormalization<T extends AnyFunction>(fn: T): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
    const normalizedArgs = args.map((arg) => {
      if (typeof arg === 'string') {
        return normaliseInput(arg);
      }
      return arg;
    });
    return fn(...(normalizedArgs as Parameters<T>));
  }) as T;
}
