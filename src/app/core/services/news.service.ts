import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PaginatedNews } from '@core/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends AbstractHttp {
  public getNews(): Observable<PaginatedNews> {
    return this.httpGetRequest('/assets/mock/mock-data-news.json');
  }
}
