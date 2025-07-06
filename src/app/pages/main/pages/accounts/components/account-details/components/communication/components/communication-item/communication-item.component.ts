import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';
import { ECommunicationType } from '@core/enums';
import { CommunicationModel } from '@core/models';
import { IconComponent } from "../../../../../../../../../../core/components/icon/icon.component";

@Component({
  selector: 'app-communication-item',
  imports: [DatePipe, ButtonDirective, IconComponent],
  templateUrl: './communication-item.component.html',
  styleUrl: './communication-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunicationItemComponent {
  @Input() item!: CommunicationModel;

  public get type(): string {
    return this.item.type.display;
  }

  public get isNew(): boolean {
    return this.item.type.value === ECommunicationType.New;
  }

  public get isHistory(): boolean {
    return this.item.type.value === ECommunicationType.History;
  }

  public get isResponded(): boolean {
    return this.item.type.value === ECommunicationType.Responded;
  }
}
