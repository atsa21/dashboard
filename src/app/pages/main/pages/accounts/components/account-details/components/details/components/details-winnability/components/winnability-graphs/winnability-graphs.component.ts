import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WinnabilityChangeModel } from '@core/models/winnability.model';

@Component({
  selector: 'app-winnability-graphs',
  imports: [CommonModule],
  templateUrl: './winnability-graphs.component.html',
  styleUrl: './winnability-graphs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnabilityGraphsComponent {
  @Input() changeList: WinnabilityChangeModel[] = [];
  @Input() isIncrease = false;
}
