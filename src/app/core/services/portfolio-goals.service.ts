import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { PortfolioGoalsModel } from '@core/models/portfolio-goals.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioGoalsService extends AbstractHttp {
  public getPortfolioGoals(): Observable<PortfolioGoalsModel> {
    return this.httpGetRequest('/assets/mock/mock-data-portfolio-goals.json');
  }
}
