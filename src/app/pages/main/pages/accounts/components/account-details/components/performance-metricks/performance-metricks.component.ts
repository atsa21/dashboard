import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountModel } from '@core/models';
import { AccountsService } from '@core/services';
import { PerformanceCardComponent } from "./components/performance-card/performance-card.component";
import { PerformanceCards, PerformanceProgressCard } from './constants/preformance-metricks.const';
import { PerformanceProgressCardComponent } from "./components/performance-progress-card/performance-progress-card.component";
import { PerformanceProgressCardModel } from './components/performance-progress-card/models/performance-progress-card.model';

@Component({
  selector: 'app-performance-metricks',
  imports: [PerformanceCardComponent, PerformanceProgressCardComponent],
  templateUrl: './performance-metricks.component.html',
  styleUrl: './performance-metricks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceMetricksComponent implements OnInit {
  public account: AccountModel | null = null;
  public progressCard: PerformanceProgressCardModel = PerformanceProgressCard;
  public cards = [];

  constructor(
    private accountService: AccountsService,
  ) {}

  ngOnInit(): void {
    this.account = this.accountService.getCurrentAccountSync();
    this.cards = PerformanceCards(this, this.account);
  }
}
