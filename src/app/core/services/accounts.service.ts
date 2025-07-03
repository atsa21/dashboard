import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PaginatedAccounts } from '@core/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends AbstractHttp {
  public getAccounts(): Observable<PaginatedAccounts> {
    return this.httpGetRequest('/assets/mock/mock-data-accounts.json');
  }
}
