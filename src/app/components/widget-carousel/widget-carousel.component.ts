import { Component, OnInit } from '@angular/core';
import { DaysService } from '../../core/services/days.service';
import { Day } from '../../core/models/day';

@Component({
  selector: 'app-widget-carousel',
  templateUrl: './widget-carousel.component.html',
  styleUrls: ['./widget-carousel.component.scss']
})
export class WidgetCarouselComponent implements OnInit {

  public days: any = [];

  data: any;
  day: Day = {} as Day;

  constructor( private daysService: DaysService ) { }

  ngOnInit(): void {
    this.getDays();
  }

  getDays(){
    this.daysService.getDays()
      .subscribe((data: any) => {
        const listDays = data.list;
        this.days = listDays.map( (day: any) => this.mapDay(day));
      }
    );
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
}
