import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainService {
  url = 'http://postcodes.io/postcodes';
  urlByOutcodes = 'http://postcodes.io/outcodes';
  constructor( private http: HttpClient) { }

  getCodes(code): Observable <any> {
    return this.http.get(`${this.url}?q=${code}`);
  }
  showDetails(code): Observable <any>  {
    return this.http.get(`${this.urlByOutcodes}/${code}`);
  }
}
