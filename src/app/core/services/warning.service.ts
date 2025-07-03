import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PaginatedWarnings } from '@core/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarningService extends AbstractHttp {
  public getWarnings(): Observable<PaginatedWarnings> {
    return this.httpGetRequest('/assets/mock/mock-data-warnings.json');
  }
}
