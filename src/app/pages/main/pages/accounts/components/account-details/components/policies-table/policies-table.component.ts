import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { ChipsComponent } from '@core/components/chips/chips.component';
import { TableComponent } from '@core/components/table/table.component';
import { DefaultPagination } from '@core/constants';
import { InputDirective } from '@core/directives/input.directive';
import { PoliciesService, UnsubscribeService } from '@core/services';
import { PaginatedPolicies } from '@core/types';
import { take } from 'rxjs';
import { PoliciesChips, PoliciesTableColumns } from './constants/policies-table.const';

@Component({
  selector: 'app-policies-table',
  imports: [TableComponent, InputDirective, ChipsComponent],
  templateUrl: './policies-table.component.html',
  styleUrl: './policies-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class PoliciesTableComponent implements OnInit {
  public policiesSignal = signal(DefaultPagination<PaginatedPolicies>());
  public myAccountsTableColumns = PoliciesTableColumns;
  public chipsSignal = signal(PoliciesChips);

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private policiesService: PoliciesService
  ) {}

  public get policies(): any {
    return this.policiesSignal();
  }

  public get chips(): any {
    return this.chipsSignal();
  }

  ngOnInit(): void {
    this.policiesService
      .getPolicies()
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.policiesSignal.set(res));
  }
}
