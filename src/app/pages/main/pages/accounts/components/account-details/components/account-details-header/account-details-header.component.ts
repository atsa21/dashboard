import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconComponent } from '@core/components/icon/icon.component';
import { AccountModel, WarningModel } from '@core/models';
import { AccountsService } from '@core/services';
import { WarningService } from '@core/services/warning.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-account-details-header',
  imports: [IconComponent],
  templateUrl: './account-details-header.component.html',
  styleUrl: './account-details-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDetailsHeaderComponent {
  public account: AccountModel | null = null;
  private warningSignal = signal([] as WarningModel[])

  constructor(
    private accountService: AccountsService,
    private warningService: WarningService,
  ) {}

  public get warnings(): WarningModel[] {
    return this.warningSignal();
  }

  ngOnInit(): void {
    this.account = this.accountService.getCurrentAccountSync();
    this.warningService.getWarnings().pipe(take(1)).subscribe((res) => this.warningSignal.set(res.results));
  }
}
