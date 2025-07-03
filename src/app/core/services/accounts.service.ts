import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { AccountModel } from '@core/models';
import { PaginatedAccounts } from '@core/types';
import { map, Observable } from 'rxjs';
import { signal, Signal } from '@angular/core';
import { UserModel } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends AbstractHttp {
  private currentAccountSignal = signal<AccountModel | null>(null);

  public getCurrentAccount(): Signal<AccountModel | null> {
    return this.currentAccountSignal;
  }

  public getCurrentAccountSync(): AccountModel | null {
    return this.currentAccountSignal();
  }

  public setCurrentAccount(account: AccountModel): void {
    this.currentAccountSignal.set(account);
  }

  public getAccounts(): Observable<PaginatedAccounts> {
    return this.httpGetRequest('/assets/mock/mock-data-accounts.json');
  }

  public getAccountById(id: number): Observable<AccountModel> {
    return this.httpGetRequest<PaginatedAccounts>('/assets/mock/mock-data-accounts.json')
      .pipe(
        map((accounts: PaginatedAccounts) => {
          const account = accounts.results.find(item => item.id === id);

          this.setCurrentAccount(account as AccountModel);
          return account as AccountModel;
        }));
  }
}
