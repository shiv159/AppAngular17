import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  onClick() {
    console.log('CustomDirectiveDirective :Button clicked ');
    // Toggle background color on click
    const currentColor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = currentColor === 'yellow' ? 'red' : 'yellow';

  }


}
