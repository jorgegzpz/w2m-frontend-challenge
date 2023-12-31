import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputUppercase]',
  standalone: true
})
export class InputUppercaseDirective {
  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}
