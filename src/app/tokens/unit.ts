import { InjectionToken } from '@angular/core';

export const UNIT = new InjectionToken<number>('Morse code unit duration', {
  factory: () => 50,
});
