import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '@core/components/icon/icon.component';
import { PoliciesModel } from '@core/models';
import { MoneyPipe } from '@core/pipes/money.pipe';

@Component({
  selector: 'app-policies-item',
  imports: [IconComponent, DatePipe, MoneyPipe],
  templateUrl: './policies-item.component.html',
  styleUrl: './policies-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesItemComponent {
  @Input() item!: PoliciesModel;
}
