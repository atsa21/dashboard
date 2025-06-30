import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { TableComponent } from '@core/components/table/table.component';
import { DefaultPagination } from '@core/constants/application';
import { UserModel } from '@core/models';
import { UnsubscribeService, UserService, WorkQueueService } from '@core/services';
import { PaginatedWorkQueue } from '@core/types';
import { WorkQueueTableColumns } from './constants/dashboard.const';

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
  public wordQueue = DefaultPagination<PaginatedWorkQueue>();
  public workQueueTableColumns = WorkQueueTableColumns;
  private user?: UserModel | null;

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private userService: UserService,
    private wordQueueService: WorkQueueService
  ){}
  
  ngOnInit(): void {
    this.user = this.userService.getCurrentUserSync();
    this.wordQueueService.getWorkQueue({creator: this.user?.id, page: 1, size: 10 })
      .pipe(this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res: PaginatedWorkQueue) => {
        this.wordQueue = res;
    });
  }
}
