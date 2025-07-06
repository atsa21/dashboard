import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailsSidebarModel } from '../../models/details-sidebar.model';

@Component({
  selector: 'app-details-sidebar',
  imports: [],
  templateUrl: './details-sidebar.component.html',
  styleUrl: './details-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSidebarComponent {
  @Input() sidebar: DetailsSidebarModel[] = [];
}
