import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { PortfolioGoalsComponent } from "./components/portfolio-goals/portfolio-goals.component";
import { QuickActionsComponent } from "./components/quick-actions/quick-actions.component";
import { MarketingIntelligenceComponent } from './components/marketing-intelligence/marketing-intelligence.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActionsComponent,
    MarketingIntelligenceComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
