import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountModel } from '@core/models';
import { AccountsService } from '@core/services';
import { AccountDetailsHeaderComponent } from './components/account-details-header/account-details-header.component';

@Component({
  selector: 'app-account-details',
  imports: [AccountDetailsHeaderComponent],
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
