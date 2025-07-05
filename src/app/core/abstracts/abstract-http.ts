import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

export class AbstractHttp {
  protected http = inject(HttpClient);

  public httpGetRequest<T>(
    url: string,
    params: Params = {},
  ): Observable<T> {
    let headers = new HttpHeaders();

    return this.http.get<T>(url, { headers, params });
  }
}
