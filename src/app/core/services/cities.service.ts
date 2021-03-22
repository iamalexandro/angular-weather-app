import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityDetail } from '../models/cityDetail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  readonly ROOT_URL = 'https://run.mocky.io/v3/f8926877-849a-416f-8226-9fd9d9fc5e07';

  constructor(private http: HttpClient) { }

  getCities(): any {
    return this.http.get<CityDetail>(this.ROOT_URL)
            .pipe(
              map( data => {
                return data;
              })
            );
  }
}
