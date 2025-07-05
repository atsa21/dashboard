import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';
import { IconComponent } from "../../../../../../../../core/components/icon/icon.component";

@Component({
  selector: 'app-compilance-documentation',
  imports: [ButtonDirective, IconComponent],
  templateUrl: './compilance-documentation.component.html',
  styleUrl: './compilance-documentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompilanceDocumentationComponent {

}
