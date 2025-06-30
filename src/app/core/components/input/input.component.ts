import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputDirective } from '@core/directives/input.directive';

@Component({
  selector: 'app-input',
  imports: [InputDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() placeholder = '';
}
