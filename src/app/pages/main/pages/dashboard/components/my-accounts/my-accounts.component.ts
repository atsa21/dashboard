import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { DefaultPagination } from '@core/constants';
import { AccountsService, UnsubscribeService } from '@core/services';
import { MyAccountChips, MyAccountsTableColumns } from './constants/my-accounts.const';
import { PaginatedAccounts } from '@core/types';
import { take } from 'rxjs';
import { TableComponent } from '@core/components/table/table.component';
import { InputDirective } from '@core/directives/input.directive';
import { ChipsComponent } from '@core/components/chips/chips.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-accounts',
  imports: [TableComponent, InputDirective, ChipsComponent],
  templateUrl: './my-accounts.component.html',
  styleUrl: './my-accounts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class MyAccountsComponent implements OnInit {
  public accountsSignal = signal(DefaultPagination<PaginatedAccounts>());
  public myAccountsTableColumns = MyAccountsTableColumns;
  public chipsSignal = signal(MyAccountChips);

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private accountsService: AccountsService,
    private router: Router,
  ){}

  public get accounts() {
    return this.accountsSignal();
  }

  public get chips() {
    return this.chipsSignal();
  }
  
  ngOnInit(): void {
    this.accountsService
      .getAccounts()
      .pipe(
        take(1),
        this.unsubscribeService$.takeUntilDestroy,
      )
      .subscribe((res) => this.accountsSignal.set(res));
  }

  public goToAccount(accountId: string) {
    this.router.navigate(['accounts', accountId]);
  }
}
