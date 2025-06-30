import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '@core/components/input/input.component';
import { ProfileIconComponent } from '@core/components/profile-icon/profile-icon.component';
import { UserService } from '@core/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileIconComponent, InputComponent],
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
