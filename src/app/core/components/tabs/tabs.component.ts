import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabNavigationModel } from '@core/models';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @Input() tabs: TabNavigationModel[] | null = null;
}
