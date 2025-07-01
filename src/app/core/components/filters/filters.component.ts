import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterConfigModel } from '@core/models';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent  {
  @Input() filters: FilterConfigModel[] | null = null;
  @Output() selectFilter: EventEmitter<FilterConfigModel> = new EventEmitter<FilterConfigModel>();

  public onSelectFilter(filter: FilterConfigModel): void {
    this.filters = this.filters ? this.filters.map((el) => {
      el.isSelected = el.value === filter.value;
      return el;
    }) : null;

    this.selectFilter.emit(filter);
  }
}
