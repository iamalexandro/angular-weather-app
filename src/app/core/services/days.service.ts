import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Day } from '../models/day';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  readonly ROOT_URL = 'https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7';

  constructor(private http: HttpClient) { }

  getDays(): any {
    return this.http.get<Day>(this.ROOT_URL)
            .pipe(
              map( data => {
                return data;
              })
            );
  }
}
