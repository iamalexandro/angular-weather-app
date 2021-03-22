import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sede } from '../models/sede';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  readonly ROOT_URL = 'https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582';

  constructor(private http: HttpClient) { }

  getSedes(): any {
    return this.http.get<Sede>(this.ROOT_URL)
            .pipe(
              map( data => {
                return data;
              })
            );
  }

  getData(): any {
    return this.http.get<Sede>(this.ROOT_URL)
        .pipe(
          map( (data: any) => {
            return data;
          })
        );
  }
}
