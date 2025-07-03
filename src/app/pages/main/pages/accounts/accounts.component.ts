import { ChangeDetectionStrategy, Component, OnInit, Self, signal } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterOutlet } from '@angular/router';
import { AccountsService, UnsubscribeService } from '@core/services';
import { take } from 'rxjs';

@Component({
  selector: 'app-accounts',
  imports: [RouterOutlet],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class AccountsComponent implements OnInit {
  public isLoadingSignal = signal(false);
  constructor(
    @Self() private readonly unsubscribeService$: UnsubscribeService,
    private router: Router,
    private accountService: AccountsService
  ) {}

  ngOnInit(): void {
    this.isLoadingSignal.set(true);
    this.checkAccountId();
  }

  public get isLoading(): boolean {
    return this.isLoadingSignal();
  }

  public get accountName(): string | null {
    return this.accountService.getCurrentAccountSync()?.account.name || null;
  }

  private checkAccountId(): void {
    const id = this.findId(this.router.routerState.snapshot.root);
    const accId = Number(id) || 1; 
    if (!id) {
      this.router.navigate(['accounts', accId]);
    }
    this.getAccount(accId);
  }

  private findId(snapshot: ActivatedRouteSnapshot | null): string | null {
    if (!snapshot) return null;
    return snapshot.params?.['id'] ?? this.findId(snapshot.firstChild ?? null);
  }

  private getAccount(id: number): void {
    this.accountService
      .getAccountById(id)
      .pipe(take(1), this.unsubscribeService$.takeUntilDestroy)
      .subscribe(() => this.isLoadingSignal.set(false));
  }
}
