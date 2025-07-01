import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterConfigModel, TableColumnsModel } from '@core/models';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ETableItemType } from '@core/enums';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileIconComponent } from '../profile-icon/profile-icon.component';
import { StatusComponent } from '../status/status.component';
import { IconComponent } from '../icon/icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    DatePipe,
    ProfileIconComponent,
    StatusComponent,
    IconComponent,
    MatMenuModule,
    MatButtonModule,
    FiltersComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> {
  @Input() tableFilters: FilterConfigModel[] = [];
  @Output() filterUpdate: EventEmitter<FilterConfigModel> = new EventEmitter<FilterConfigModel>();

  public dataSource = new MatTableDataSource<any>();
  public columns: TableColumnsModel[] = [];
  public columnsTitle: string[] = [];
  public eTableItemType = ETableItemType;

  @Input() set tableColumns(cols: TableColumnsModel[]) {
    this.columns = cols;
    this.columnsTitle = cols.map((col) => col.key);
  }

  @Input() set tableData(data: T) {
    this.dataSource.data = (data as any).results;
  }
}
