import {
  AfterViewInit,
  Component,
  Inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { filter, scan, startWith, switchMap } from 'rxjs/operators';
import { CharService } from './services';
import { DICT, UNIT } from './tokens';
import { MORSE } from './tokens/morse';
import { isNumber } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[style.--tui-duration]': 'unit + "ms"',
  },
})
export class AppComponent implements AfterViewInit {
  readonly chars = [...this.map.keys()];

  readonly reset$ = new Subject<void>();

  readonly output$ = this.reset$.pipe(
    switchMap(() =>
      merge(...this.services.toArray()).pipe(
        filter((x) => !isNumber(x)),
        scan((result, char) => result + char, ''),
        startWith('')
      )
    ),
    startWith('')
  );

  @ViewChildren(CharService)
  readonly services!: QueryList<Observable<string | (0 | 1)[]>>;

  constructor(
    @Inject(DICT) private readonly map: Map<string, readonly (0 | 1)[]>,
    @Inject(MORSE) readonly morse$: Observable<0 | 1>,
    @Inject(UNIT) readonly unit: number
  ) {}

  ngAfterViewInit() {
    this.reset$.next();
  }

  onClick(button: HTMLElement) {
    button.blur();
    this.reset$.next();
  }
}
