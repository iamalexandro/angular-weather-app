import { Component, OnInit } from '@angular/core';
import { DaysService } from '../../core/services/days.service';
import { Day } from '../../core/models/day';
import { City } from '../../core/models/city';

@Component({
  selector: 'app-widget-suggest',
  templateUrl: './widget-suggest.component.html',
  styleUrls: ['./widget-suggest.component.scss']
})
export class WidgetSuggestComponent implements OnInit {

  public days: any = [];

  day: Day = {} as Day;
  city: City = {} as City;

  constructor(private daysService: DaysService) { }

  ngOnInit(): void {
    this.getDays();
    this.getCity();
  }

  getDays() {
    this.daysService.getDays()
      .subscribe((data: any) => {
        const listDays = data.list;
        this.days = listDays.map( (day: any) => this.mapDay(day));
        this.getDay(this.days);
      }
    );
  }

  getCity() {
    this.daysService.getDays()
      .subscribe((data: any) => {
        const city = data.city;
        this.city = this.mapCity(city);
      }
    );
  }

  getDay(days: any) {
    for (let i in days){
      let j = parseInt(i);
      if( days[j].temp > 298.15 && days[j].temp < 301.15 ){
        if( j > 0 ){
          if(days[j].humidity < days[j-1].humidity ){
            this.day = days[j];
          }
        }
      }
    }
  }

  mapDay(day: any): Day {
    return {
      date: day.date,
      humidity: day.main.humidity,
      temp: day.main.temp,
      speed: day.wind.speed,
      icon: day.weather[0].icon
    }
  }

  mapCity(city: any): City {
    return {
      name: city.name,
      country: city.country
    }
  }

}
