import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';

@Component({
  selector: 'app-quick-actions',
  imports: [ButtonDirective],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickActionsComponent {

}
