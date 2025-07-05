import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressRatioComponent } from '@core/components/progress-ratio/progress-ratio.component';
import { PerformanceProgressCardModel } from './models/performance-progress-card.model';

@Component({
  selector: 'app-performance-progress-card',
  imports: [ProgressRatioComponent],
  templateUrl: './performance-progress-card.component.html',
  styleUrl: './performance-progress-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceProgressCardComponent {
  @Input() card!: PerformanceProgressCardModel;
}
