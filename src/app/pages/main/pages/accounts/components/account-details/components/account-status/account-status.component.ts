import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountStatusList } from './constants/account-status.const';
import { AccountModel } from '@core/models';
import { AccountsService } from '@core/services';
import { IconComponent } from '@core/components/icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-status',
  imports: [CommonModule, IconComponent],
  templateUrl: './account-status.component.html',
  styleUrl: './account-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountStatusComponent implements OnInit {
  public accountStatusList = AccountStatusList;
  public account: AccountModel | null = null;
  public activeStatusPosition = 0;

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.account = this.accountService.getCurrentAccountSync();
    this.activeStatusPosition = this.account?.account.status.position || 0;
    this.accountStatusList = this.accountStatusList.map((status) => {
      return {
        ...status,
        isSelected: status.position ? status.position <= this.activeStatusPosition : false
      }
    })
  }
}