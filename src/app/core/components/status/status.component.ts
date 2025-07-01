import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EWorkQueueStatus } from '@core/enums';
import { IKeyValue } from '@core/models';

@Component({
  selector: 'app-status',
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
    @Input() status!: IKeyValue<string>;
}
