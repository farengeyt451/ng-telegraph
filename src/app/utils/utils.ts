import { MonoTypeOperatorFunction, of, pipe } from 'rxjs';
import { concatMap, delay, filter, scan, startWith } from 'rxjs/operators';

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function delayEach<T>(duration: number): MonoTypeOperatorFunction<T> {
  return concatMap(x => of(x).pipe(delay(duration)));
}

export function consecutive<T>(value: T, amount: number): MonoTypeOperatorFunction<unknown> {
  return pipe(
    startWith(...new Array(amount).fill(value)),
    scan((result, item) => (item === value ? ++result : 0), 0),
    filter(v => v >= amount)
  );
}
