import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountModel } from '@core/models';
import { AccountsService } from '@core/services';
import { AccountDetailsHeaderComponent } from './components/account-details-header/account-details-header.component';
import { PoliciesComponent } from "./components/policies/policies.component";
import { PerformanceMetricksComponent } from './components/performance-metricks/performance-metricks.component';
import { AccountStatusComponent } from './components/account-status/account-status.component';
import { DetailsComponent } from './components/details/details.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { PoliciesTableComponent } from './components/policies-table/policies-table.component';
import { CompilanceDocumentationComponent } from "./components/compilance-documentation/compilance-documentation.component";

@Component({
  selector: 'app-account-details',
  imports: [
    AccountDetailsHeaderComponent,
    PerformanceMetricksComponent,
    PoliciesComponent,
    AccountStatusComponent,
    DetailsComponent,
    CommunicationComponent,
    PoliciesTableComponent,
    CompilanceDocumentationComponent
],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {
  public account: AccountModel | null = null;

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.account = this.accountService.getCurrentAccountSync();
  }
}
