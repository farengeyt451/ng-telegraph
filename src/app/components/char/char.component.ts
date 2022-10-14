import { Component, HostListener, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CharDirective } from 'src/app/directives';
import { CharService, MorseService } from 'src/app/services';
import { isNumber } from 'src/app/utils';
@Component({
  selector: '[char]',
  templateUrl: 'char.template.html',
  styleUrls: ['char.style.scss'],
  providers: [CharService],
})
export class CharComponent {
  readonly progress$ = this.service.pipe(
    filter(isNumber),
    map(value => value * 100)
  );

  readonly pending$ = this.service.pipe(filter(Boolean), map(isNumber));

  constructor(
    @Inject(CharService) readonly service: Observable<number | string>,
    @Inject(CharDirective) readonly directive: CharDirective,
    @Inject(MorseService) private readonly emitter: MorseService
  ) {}

  @HostListener('click')
  onClick() {
    this.emitter.send(this.directive.char);
  }
}
