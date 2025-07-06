import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { WinnabilityModel } from '@core/models/winnability.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinnabilityService extends AbstractHttp {
  public getWinnability(): Observable<WinnabilityModel> {
    return this.httpGetRequest('/assets/mock/mock-data-winnability.json');
  }
}
