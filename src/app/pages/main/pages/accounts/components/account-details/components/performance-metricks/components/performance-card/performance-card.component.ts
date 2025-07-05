import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WinnabilityDotsComponent } from "../../../../../../../../../../core/components/winnability-dots/winnability-dots.component";
import { ButtonDirective } from '@core/directives/button.directive';

@Component({
  selector: 'app-performance-card',
  imports: [WinnabilityDotsComponent, ButtonDirective],
  templateUrl: './performance-card.component.html',
  styleUrl: './performance-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceCardComponent {
  @Input() card: any;
}
