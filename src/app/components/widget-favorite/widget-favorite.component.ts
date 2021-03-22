import { Component, OnInit } from '@angular/core';
import { SedesService } from '../../core/services/sedes.service';
import { Sede } from '../../core/models/sede';

@Component({
  selector: 'app-widget-favorite',
  templateUrl: './widget-favorite.component.html',
  styleUrls: ['./widget-favorite.component.scss']
})
export class WidgetFavoriteComponent implements OnInit {

  public sedes: any = [];
  sede: Sede = {} as Sede;

  constructor(private sedesService: SedesService) { }

  ngOnInit(): void {
    this.getSedes();
  }

  getSedes(){
    this.sedesService.getSedes()
      .subscribe((data: any) => {
        const sedes = data.places;
        this.sedes = sedes.filter( (sede: any) =>  !sede.main_headquarter );
        this.sedes = this.sedes.map( (sede: any) =>  this.mapSede(sede));
      }
    );
  }

  mapSede(sede: any): Sede{
    return {
      image: sede.image,
      name: sede.name,
      icon: sede.weather[0].icon,
      id: sede.id,
      temp: sede.main.temp,
      humidity: sede.main.humidity,
      windSpeed: sede.wind.speed,
      country: sede.sys.country,
      description: sede.description
    };
  }
}
