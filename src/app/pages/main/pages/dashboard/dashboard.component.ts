import { ChangeDetectionStrategy, Component, OnInit, Self, signal, Signal } from '@angular/core';
import { TableComponent } from '@core/components/table/table.component';
import { DefaultPagination } from '@core/constants/application';
import { FilterConfigModel, UserModel, WorkQueueFilterModel } from '@core/models';
import { UnsubscribeService, UserService, WorkQueueService } from '@core/services';
import { PaginatedWorkQueue, PaginatedWorkQueueFilters } from '@core/types';
import { WorkQueueTableColumns } from './constants/dashboard.const';
import { Observable, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class DashboardComponent implements OnInit {
  public wordQueueSignal = signal(DefaultPagination<PaginatedWorkQueue>());
  public workQueueTableColumns = WorkQueueTableColumns;
  public tableFiltersSignal = signal([] as FilterConfigModel[]);

  private user: UserModel | null = null;
  private filters = {
    offset: 0,
    limit: 12,
    assign: '',
  };

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private userService: UserService,
    private wordQueueService: WorkQueueService
  ){}

  public get wordQueue() {
    return this.wordQueueSignal();
  }

  public get tableFilters() {
    return this.tableFiltersSignal();
  }
  
  ngOnInit(): void {
    this.user = this.userService.getCurrentUserSync() as UserModel;
    this.filters.assign = this.user.id;
    this.initWordQueue();
  }

  public filteUpdate(filter: FilterConfigModel): void {
    this.filters.assign = filter.value;
    this.getWordQueue()
      .pipe(
        take(1),
        this.unsubscribeService$.takeUntilDestroy
      )
      .subscribe();
  }

  private initWordQueue(): void {
    this.wordQueueService
      .getWorkQueueFilters()
      .pipe(
        take(1),
        switchMap((filters: PaginatedWorkQueueFilters) => {
          filters.results[0].isSelected = true;
          this.filters.assign = filters.results[0].value;
          this.tableFiltersSignal.set(filters.results);
          return this.getWordQueue();
        },
        ),
        this.unsubscribeService$.takeUntilDestroy,
      )
      .subscribe();
  }

  private getWordQueue(): Observable<PaginatedWorkQueue> {
    return this.wordQueueService
      .getWorkQueue(this.filters)
      .pipe(
        tap((res: PaginatedWorkQueue) => this.wordQueueSignal.set(res))
      );
  }
}
