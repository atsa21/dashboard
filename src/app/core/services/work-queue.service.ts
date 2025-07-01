import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PaginatedWorkQueue, PaginatedWorkQueueFilters } from '@core/types';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkQueueService extends AbstractHttp {
  public getWorkQueue(filters: {
    offset: number;
    limit: number;
    assign?: string;
  }): Observable<PaginatedWorkQueue> {
    return this.httpGetRequest<PaginatedWorkQueue>('/assets/mock/mock-data-work-queue.json')
      .pipe(
        map((fullList: PaginatedWorkQueue) => {
          const { offset, limit, assign } = filters;
          let filteredList = fullList.results;
          if (assign) {
            filteredList = filteredList.filter(item => item.assign === assign);
          }
          const paginatedData = filteredList.slice(offset, offset + limit);

          return {
            results: paginatedData,
            count: filteredList.length,
            offset,
            limit,
          };
      }));
  }

  public getWorkQueueFilters(): Observable<PaginatedWorkQueueFilters> {
    return this.httpGetRequest('/assets/mock/mock-data-work-queue-filters.json');
  }
}
