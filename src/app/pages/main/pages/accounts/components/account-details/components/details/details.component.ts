import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailsSidebarModel } from './models/details-sidebar.model';
import { DetailsSidebar } from './constants/details-sidebar.const';
import { DetailsSidebarComponent } from "./components/details-sidebar/details-sidebar.component";
import { DetailsWinnabilityComponent } from "./components/details-winnability/details-winnability.component";

@Component({
  selector: 'app-details',
  imports: [DetailsSidebarComponent, DetailsWinnabilityComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {
  public sidebar: DetailsSidebarModel[] = DetailsSidebar;
}
