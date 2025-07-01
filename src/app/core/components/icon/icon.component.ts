import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  template: `<div #container class="icon"></div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @ViewChild('container', { static: true }) container!: ElementRef;
  public svgContent: string | null = null;

  constructor(
    private http: HttpClient,
    private renderer: Renderer2

  ) {}

  @Input()
  set url(iconUrl: string) {
    if (iconUrl) {
      this.loadSvg(iconUrl);
    }
  }

  private loadSvg(url: string): void {
    this.http.get(url, { responseType: 'text' }).subscribe(svgText => {
      this.container.nativeElement.innerHTML = '';

      const svgElement = this.renderer.createElement('div');
      svgElement.innerHTML = svgText;

      const svg = svgElement.querySelector('svg');
      if (svg) {
        this.renderer.appendChild(this.container.nativeElement, svg);
      }
    });
  }
}
