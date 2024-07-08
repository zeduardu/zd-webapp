import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[nextPreviousScrollbar]',
  exportAs: 'nextPreviousScrollbar'
})
export class NextPreviousScrollableDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() scrollUnit: number = 0;

  private get element() {
    return this.elementRef.nativeElement;
  }

  get isOverflow() {
    return this.element.scrollWidth > this.element.clientWidth;
  }

  scroll(direction: number) {
    this.element.scrollLeft += this.scrollUnit * direction;
  }

  get canScrollStart() {
    return this.element.scrollLeft > 0;
  }

  get canScrollEnd() {
    return (
      this.element.scrollLeft + this.element.clientWidth <=
      this.element.scrollWidth
    );
  }

  @HostListener('window:resize')
  onWindowResize() {} // required for update view when windows resized
}
