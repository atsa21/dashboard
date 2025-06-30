import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsComponent {

}
