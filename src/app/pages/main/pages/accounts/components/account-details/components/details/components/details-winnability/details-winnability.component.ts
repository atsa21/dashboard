import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';
import { WinnabilityModel } from '@core/models/winnability.model';
import { UnsubscribeService, WinnabilityService } from '@core/services';
import { take } from 'rxjs';
import { WinnabilityGraphsComponent } from "./components/winnability-graphs/winnability-graphs.component";
import { ChipCellComponent } from '@core/components/chip-cell/chip-cell.component';
import { ProgressRatioComponent } from "@core/components/progress-ratio/progress-ratio.component";
import { EProgressRatio } from '@core/components/progress-ratio/enum/progress-ratio.enum';

@Component({
  selector: 'app-details-winnability',
  imports: [ButtonDirective, WinnabilityGraphsComponent, ChipCellComponent, ProgressRatioComponent],
  templateUrl: './details-winnability.component.html',
  styleUrl: './details-winnability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService]
})
export class DetailsWinnabilityComponent implements OnInit {
public winnabilitySignal = signal({} as WinnabilityModel);
public eProgressRatio = EProgressRatio;

constructor(
  @Self() private readonly unsubscribeService$: UnsubscribeService,
  private winnabilityService: WinnabilityService
) {}

public get winnability(): WinnabilityModel {
  return this.winnabilitySignal();
}

ngOnInit(): void {
  this.winnabilityService
    .getWinnability()
    .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
    .subscribe((res) => this.winnabilitySignal.set(res));
}
}
