import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { InputSizeType } from '@core/types';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit, OnDestroy {
  @Input() size: InputSizeType = 'medium';

  private _unlistener: (() => void) | undefined;
  private _unlistener1: (() => void) | undefined;

  constructor(
    private renderer2: Renderer2,
    public elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    const field = this.createField();
    const fieldWrapper = this.createFieldWrapper();
    const el = this.createCurrentElField();
    const parent = el.parentNode;
    this.renderer2.insertBefore(parent, field, el);
    this.renderer2.appendChild(field, fieldWrapper);
    this.renderer2.appendChild(fieldWrapper, el);
  }

  ngOnDestroy(): void {
    if (this._unlistener) {
      this._unlistener();
    }
    if (this._unlistener1) {
      this._unlistener1();
    }
  }

    private createCurrentElField(): HTMLElement {
    const field = this.elementRef.nativeElement;
    const className = 'app-input';

    this.renderer2.addClass(field, className);
    this.renderer2.addClass(field, this.size);

    return field;
  }

  private createField(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'app-input-field');

    return field;
  }

  private createFieldWrapper(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'app-input-field-wrapper');

    return field;
  }
}
