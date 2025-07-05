import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { DefaultPagination } from '@core/constants';
import { PoliciesModel } from '@core/models';
import { PoliciesService, UnsubscribeService } from '@core/services';
import { PaginatedPolicies } from '@core/types';
import { take } from 'rxjs';
import { PoliciesItemComponent } from "./components/policies-item/policies-item.component";

@Component({
  selector: 'app-policies',
  imports: [PoliciesItemComponent],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class PoliciesComponent implements OnInit {
  public policiesSignal = signal(DefaultPagination<PaginatedPolicies>());

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private policiesService: PoliciesService
  ) {}

  public get policies(): any {
    return this.policiesSignal();
  }

  ngOnInit(): void {
    this.policiesService
      .getPolicies()
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.policiesSignal.set(res));
  }
}