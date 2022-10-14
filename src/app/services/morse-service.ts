import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DICT } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class MorseService extends Subject<readonly (0 | 1)[]> {
  constructor(@Inject(DICT) private readonly chars: Map<string, readonly (0 | 1)[]>) {
    super();
  }

  send(char: string) {
    this.next(this.chars.get(char) as (0 | 1)[]);
  }
}
