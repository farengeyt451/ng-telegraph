import { Inject, Injectable } from '@angular/core';
import { tuiPure } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { concatMapTo, endWith, map, repeat, share, startWith, takeWhile } from 'rxjs/operators';
import { SPACE } from '../consts';
import { CharDirective } from '../directives';
import { DICT } from '../tokens';
import { MORSE } from '../tokens/morse';
import { consecutive, isNumber } from '../utils';

@Injectable()
export class CharService extends Observable<number | string> {
  private readonly inner$: Observable<any> = this.morse$.pipe(
    consecutive(0, SPACE.length),
    concatMapTo(
      this.morse$.pipe(
        takeWhile(this.isValid.bind(this)),
        map((_, index) => this.getValue(index)),
        startWith(0),
        endWith(0)
      )
    ),
    takeWhile(isNumber, true),
    repeat(),
    share()
  );

  constructor(
    @Inject(MORSE) private readonly morse$: Observable<0 | 1>,
    @Inject(DICT) private readonly chars: Map<string, readonly (0 | 1)[]>,
    @Inject(CharDirective) private readonly directive: CharDirective
  ) {
    super(subscriber => this.inner$.subscribe(subscriber));
  }

  @tuiPure
  private get sequence(): readonly (0 | 1)[] {
    return [...(this.chars.get(this.char) as (0 | 1)[]), ...SPACE];
  }

  private get char(): string {
    return this.directive.char;
  }

  private isValid(value: 0 | 1, index: number): boolean {
    return this.sequence[index] === value;
  }

  private getValue(index: number): number | string {
    return this.sequence.length === index + 1 ? this.char : (index + 2) / this.sequence.length;
  }
}
