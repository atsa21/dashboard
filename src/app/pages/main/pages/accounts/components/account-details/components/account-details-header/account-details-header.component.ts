import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { IconComponent } from '@core/components/icon/icon.component';
import { ButtonDirective } from '@core/directives/button.directive';
import { AccountModel, WarningModel } from '@core/models';
import { AccountsService, UnsubscribeService } from '@core/services';
import { WarningService } from '@core/services/warning.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-account-details-header',
  imports: [IconComponent, ButtonDirective],
  templateUrl: './account-details-header.component.html',
  styleUrl: './account-details-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class AccountDetailsHeaderComponent implements OnInit {
  public account: AccountModel | null = null;
  private warningSignal = signal([] as WarningModel[])

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private accountService: AccountsService,
    private warningService: WarningService,
  ) {}

  public get warnings(): WarningModel[] {
    return this.warningSignal();
  }

  ngOnInit(): void {
    this.account = this.accountService.getCurrentAccountSync();
    this.warningService
      .getWarnings()
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.warningSignal.set(res.results));
  }
}
