import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonColorType, ButtonSizeType } from '@core/types';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {
  @Input() size: ButtonSizeType = 'medium';
  @Input() color: ButtonColorType = 'accent';

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'app-button');
    this.renderer2.addClass(this.elementRef.nativeElement, this.size);
    this.renderer2.addClass(this.elementRef.nativeElement, this.color);
  }
}
