import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[char]',
})
export class CharDirective {
  @Input() char = '';
}
