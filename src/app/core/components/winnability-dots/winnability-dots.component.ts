import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EWinnability } from '@core/enums';

@Component({
  selector: 'app-winnability-dots',
  imports: [],
  templateUrl: './winnability-dots.component.html',
  styleUrl: './winnability-dots.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnabilityDotsComponent {
  @Input() winnability: EWinnability = EWinnability.Low;

  public get dotsAmount(): string[] {
    switch(this.winnability) {
      case EWinnability.Low: {
        return [''];
      }
      case EWinnability.Medium: {
        return ['', ''];
      }
      case EWinnability.Strong: {
        return ['', '', ''];
      }
      default :
      return ['', '', '', '']
    }
  }
}
