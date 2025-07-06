import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { DefaultPagination } from '@core/constants';
import { CommunicationService, UnsubscribeService } from '@core/services';
import { take } from 'rxjs';
import { CommunicationChips } from './constants/communication.const';
import { ChipsComponent } from '@core/components/chips/chips.component';
import { PaginatedCommunication } from '@core/types';
import { InputDirective } from '@core/directives/input.directive';
import { CommunicationItemComponent } from "./components/communication-item/communication-item.component";
import { CommunicationModel } from '@core/models';
import { ECommunicationType } from '@core/enums';

@Component({
  selector: 'app-communication',
  imports: [ChipsComponent, InputDirective, CommunicationItemComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class CommunicationComponent implements OnInit {
  public newCommunicationSignal = signal([] as CommunicationModel[]);
  public communicationSignal = signal([] as CommunicationModel[]);
  public chipsSignal = signal(CommunicationChips);

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private communicationService: CommunicationService,
  ) {}

  public get newCommunication(): any {
    return this.newCommunicationSignal();
  }

  public get communication(): any {
    return this.communicationSignal();
  }

  public get chips(): any {
    return this.chipsSignal();
  }

  ngOnInit(): void {
    this.getNewMessages();
    this.getOtherMessages();
  }

  private getNewMessages(): void {
    this.communicationService
      .getCommunication([ECommunicationType.New])
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.newCommunicationSignal.set(res.results));
  }

  private getOtherMessages(): void {
    this.communicationService
      .getCommunication([ECommunicationType.Responded, ECommunicationType.History])
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe((res) => this.communicationSignal.set(res.results));
  }
}
