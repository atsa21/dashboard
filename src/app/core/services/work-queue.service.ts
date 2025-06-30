import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PaginatedWorkQueue } from '@core/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkQueueService extends AbstractHttp {
  public getWorkQueue(filters: any): Observable<PaginatedWorkQueue> {
    return this.httpGetRequest('/assets/mock/mock-data-work-queue.json', filters);
  }
}
