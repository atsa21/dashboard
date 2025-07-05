import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PaginatedPolicies } from '@core/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService extends AbstractHttp {
  public getPolicies(): Observable<PaginatedPolicies> {
    return this.httpGetRequest('/assets/mock/mock-data-policies.json');
  }
}
