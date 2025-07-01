import { ChangeDetectionStrategy, Component, OnInit, Self, signal, Signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UnsubscribeService, UserService } from '@core/services';
import { take } from 'rxjs';
import { TabsComponent } from "../../core/components/tabs/tabs.component";
import { MainTabs } from './constants/main-tabs.const';
import { TabNavigationModel } from '@core/models';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TabsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class MainComponent implements OnInit {
  public isLoading = signal(false);
  public tabs: TabNavigationModel[] = MainTabs;

  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.isLoading.set(true);
    this.userService.getUser().pipe(take(1), this.unsubscribeService$.takeUntilDestroy).subscribe(() => this.isLoading.set(false));
  }
}
