import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { ProgressRatioComponent } from '@core/components/progress-ratio/progress-ratio.component';
import { RatioTargetComponent } from '@core/components/ratio-target/ratio-target.component';
import { PortfolioGoalsModel } from '@core/models/portfolio-goals.model';
import { PortfolioGoalsService, UnsubscribeService } from '@core/services';
import { take } from 'rxjs';

@Component({
  selector: 'app-portfolio-goals',
  imports: [RatioTargetComponent, ProgressRatioComponent],
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class PortfolioGoalsComponent implements OnInit {
  public ratioSignal = signal({} as PortfolioGoalsModel);

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private portfolioGoalsService: PortfolioGoalsService
  ){}

  public get ratio() {
    return this.ratioSignal();
  }

  ngOnInit(): void {
    this.portfolioGoalsService
      .getPortfolioGoals()
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.ratioSignal.set(res));
  }
}
