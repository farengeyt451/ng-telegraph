import { InjectionToken } from '@angular/core';

export const DICT = new InjectionToken<Map<string, readonly (0 | 1)[]>>('Morse code dictionary', {
  factory: () =>
    new Map([
      [' ', [0, 0, 0, 0]],
      ['a', [1, 0, 1, 1, 1]],
      ['b', [1, 1, 1, 0, 1, 0, 1, 0, 1]],
      ['c', [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1]],
      ['d', [1, 1, 1, 0, 1, 0, 1]],
      ['e', [1]],
      ['f', [1, 0, 1, 0, 1, 1, 1, 0, 1]],
      ['g', [1, 1, 1, 0, 1, 1, 1, 0, 1]],
      ['h', [1, 0, 1, 0, 1, 0, 1]],
      ['i', [1, 0, 1]],
      ['j', [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1]],
      ['k', [1, 1, 1, 0, 1, 0, 1, 1, 1]],
      ['l', [1, 0, 1, 1, 1, 0, 1, 0, 1]],
      ['m', [1, 1, 1, 0, 1, 1, 1]],
      ['n', [1, 1, 1, 0, 1]],
      ['o', [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1]],
      ['p', [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1]],
      ['q', [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1]],
      ['r', [1, 0, 1, 1, 1, 0, 1]],
      ['s', [1, 0, 1, 0, 1]],
      ['t', [1, 1, 1]],
      ['u', [1, 0, 1, 0, 1, 1, 1]],
      ['v', [1, 0, 1, 0, 1, 0, 1, 1, 1]],
      ['w', [1, 0, 1, 1, 1, 0, 1, 1, 1]],
      ['x', [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1]],
      ['y', [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1]],
      ['z', [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1]],
    ]),
});