import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PortfolioGoalItem } from '@core/models/portfolio-goals.model';

@Component({
  selector: 'app-ratio-target',
  imports: [CommonModule],
  templateUrl: './ratio-target.component.html',
  styleUrl: './ratio-target.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatioTargetComponent {
  @Input() ratio!: PortfolioGoalItem;

  public get titleLeft(): number {
    
    const maxPercent = this.ratio.percentage;
    const maxPx = 238;

    return (this.ratio.value / maxPercent) * maxPx;
  }

  public get subtitleLeft(): number {
    const maxPercent = this.ratio.percentage;
    const maxPx = 238;

    return (this.ratio.value / maxPercent) * maxPx;
  }
}
