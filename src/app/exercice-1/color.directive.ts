import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[color]' })
export class ColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('document:keydown', ['$event']) keyDown($event) {
    switch ($event.key) {
      case 'ArrowDown':
        this.color('red');
        break;
      case 'ArrowUp':
        this.color('blue');
        break;
      case 'ArrowLeft':
        this.color('green');
        break;
      case 'ArrowRight':
        this.color('purple');
        break;
    }
  }

  color(color: String): void {
    this.el.nativeElement.style.color = color;
  }
}
