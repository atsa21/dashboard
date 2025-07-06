import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EWinnability } from '@core/enums';
import { WinnabilityDotsComponent } from '../winnability-dots/winnability-dots.component';

@Component({
  selector: 'app-chip-cell',
  imports: [CommonModule, WinnabilityDotsComponent],
  templateUrl: './chip-cell.component.html',
  styleUrl: './chip-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipCellComponent {
  @Input() text!: string;
  @Input() value!: EWinnability;
  @Input() isColorRate = false;
  @Input() isBorder = false;
  @Input() isRate = false;
  @Input() height = 24;
  private yellow = '#FDD261';

  public get numberColor(): string {
    if (this.isColorRate) {
      const num = Number(this.value);
      if (isNaN(num)) return '#1E40AF57';
      if (num >= 0 && num <= 35) return '#3BB979';
      if (num >= 36 && num <= 65) return this.yellow;
      if (num >= 66 && num <= 100) return '#B93B3B';
      return '#1E40AF57';
    } else {
      return this.isBorder ? 'transparent' : '#1E40AF57';
    }
  }

  public get isYellow(): boolean {
    return this.numberColor === this.yellow;
  }
}
