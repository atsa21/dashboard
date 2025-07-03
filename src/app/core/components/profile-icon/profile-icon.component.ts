import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserModel } from '@core/models';
import { NameInitialsPipe } from '@core/pipes/name-initials.pipe';

@Component({
  selector: 'app-profile-icon',
  imports: [CommonModule, NameInitialsPipe],
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileIconComponent {
  @Input() user!: UserModel;
  @Input() size = 'medium';
}
