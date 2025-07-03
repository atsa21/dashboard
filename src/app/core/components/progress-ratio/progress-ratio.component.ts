import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PortfolioGoalObjectiveItem } from '@core/models/portfolio-goals.model';

@Component({
  selector: 'app-progress-ratio',
  imports: [CommonModule],
  templateUrl: './progress-ratio.component.html',
  styleUrl: './progress-ratio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressRatioComponent {
  @Input() progress!: PortfolioGoalObjectiveItem;

  public get progressAmount(): number {
    return Math.round((this.progress.value / this.progress.objective_value) * 100);
  }

  public get progressWidth(): number {
    const maxPx = 197;

    return (this.progressAmount / 100) * maxPx;
  }
}
