import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileIconComponent } from '@core/components/profile-icon/profile-icon.component';
import { InputDirective } from '@core/directives/input.directive';
import { UserService } from '@core/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileIconComponent, InputDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  public get currentUser(): any {
    return this.userService.getCurrentUserSync();
  }
}
