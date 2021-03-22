import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../core/services/cities.service';
import { CityDetail } from '../../core/models/cityDetail';

@Component({
  selector: 'app-widget-cities',
  templateUrl: './widget-cities.component.html',
  styleUrls: ['./widget-cities.component.scss']
})
export class WidgetCitiesComponent implements OnInit {

  public cities: any = [];
  public recomendedCities: any = [];
  public mainRecomendedCities: any = [];
  city: CityDetail = {} as CityDetail;

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.citiesService.getCities()
      .subscribe((data: any) => {
        const cities = data.result;
        this.cities = cities.map( (city: any) => this.mapCity(city));
        this.getRecomendedCities(this.cities);
      }
    );
  }

  getRecomendedCities(cities: any) {
    for (let i in cities){
      let j = parseInt(i);
      if( cities[j].temp > 297.15 && cities[j].temp < 303.15 ){
        this.recomendedCities.push(cities[j]);
      }
    }
    this.recomendedCities.sort(((a: any, b: any) => a.humidity - b.humidity));
    for (let i in this.recomendedCities){
      let j = parseInt(i);
      if(j<3) this.mainRecomendedCities[j] = this.recomendedCities[j];
    }
  }

  mapCity(city: any): CityDetail {
    return {
      name: city.name,
      image: city.image,
      temp: city.main.temp,
      humidity: city.main.humidity,
      url: city.uri
    }
  }
}
