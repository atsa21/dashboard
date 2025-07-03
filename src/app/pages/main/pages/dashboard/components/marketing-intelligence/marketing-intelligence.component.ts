import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { NewsModel } from '@core/models';
import { NewsService, UnsubscribeService } from '@core/services';
import { take } from 'rxjs';

@Component({
  selector: 'app-marketing-intelligence',
  imports: [CommonModule],
  templateUrl: './marketing-intelligence.component.html',
  styleUrl: './marketing-intelligence.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class MarketingIntelligenceComponent implements OnInit {
  public newsSignal = signal([] as NewsModel[]);

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private newsService: NewsService
  ){}

  public get news() {
    return this.newsSignal();
  }

  ngOnInit(): void {
    this.newsService
      .getNews()
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.newsSignal.set(res.results));
  }
}
