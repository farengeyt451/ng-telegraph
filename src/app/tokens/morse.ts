import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { from, fromEvent, merge, Observable } from 'rxjs';
import { concatMap, endWith, filter, map, share } from 'rxjs/operators';
import { SPACE } from '../consts';
import { MorseService } from '../services';
import { delayEach } from '../utils';
import { DICT } from './dictionary';
import { UNIT } from './unit';

export const MORSE = new InjectionToken<Observable<0 | 1>>('A sequence of Morse code', {
  factory: () => {
    const chars = inject(DICT);
    const duration = inject(UNIT);
    const service$ = inject(MorseService);
    const keydown$ = fromEvent<KeyboardEvent>(inject(DOCUMENT), 'keydown').pipe(
      map(({ key }) => chars.get(key)),
      filter(Boolean)
    );

    return merge(service$, keydown$).pipe(
      concatMap(sequence => from(sequence).pipe(endWith(...SPACE), delayEach(duration))),
      share()
    );
  },
});
