import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { ECommunicationType } from '@core/enums';
import { PaginatedCommunication } from '@core/types';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService extends AbstractHttp {
  public getCommunication(type: ECommunicationType[]): Observable<PaginatedCommunication> {
    return this.httpGetRequest<PaginatedCommunication>('/assets/mock/mock-data-communication.json')
      .pipe(
        map((fullList: PaginatedCommunication) => {
          let filteredList = fullList.results;
          if (type && type.length > 0) {
            filteredList = filteredList.filter(item => type.includes(item.type.value));
          }

          return {
            results: filteredList,
            count: filteredList.length,
          };
      }));
  }
}
