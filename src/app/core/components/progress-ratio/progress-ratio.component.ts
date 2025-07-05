import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { PortfolioGoalObjectiveItem } from '@core/models/portfolio-goals.model';
import { EProgressRatio } from './enum/progress-ratio.enum';
import { ProgressRatio } from './constants/progress-ratio.const';

@Component({
  selector: 'app-progress-ratio',
  imports: [CommonModule],
  templateUrl: './progress-ratio.component.html',
  styleUrl: './progress-ratio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressRatioComponent {
  @Input() progress!: PortfolioGoalObjectiveItem;
  @Input() type: EProgressRatio = EProgressRatio.Extended;

  public get maxPx(): number {
    return ProgressRatio[this.type].maxPx;
  }

  public get titleWidth(): number {
    return ProgressRatio[this.type].titleWidth;
  }

  public get height(): number {
    return ProgressRatio[this.type].height;
  }

  public get progressAmount(): number {
    return this.progress.name ? this.progress.value : Math.round((this.progress.value / this.progress.objective_value) * 100);
  }

  public get progressWidth(): number {
    return (this.progressAmount / 100) * this.maxPx;
  }
}
