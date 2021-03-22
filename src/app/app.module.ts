import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SedesService } from './core/services/sedes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWidgetComponent } from './components/main-widget/main-widget.component';
import { WidgetCarouselComponent } from './components/widget-carousel/widget-carousel.component';
import { TempPipe } from './core/pipes/temp.pipe';
import { SpeedPipe } from './core/pipes/speed.pipe';
import { HumidityPipe } from './core/pipes/humidity.pipe';
import { WidgetFavoriteComponent } from './components/widget-favorite/widget-favorite.component';
import { WidgetSuggestComponent } from './components/widget-suggest/widget-suggest.component';
import { WidgetCitiesComponent } from './components/widget-cities/widget-cities.component';
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    WidgetCarouselComponent,
    TempPipe,
    SpeedPipe,
    HumidityPipe,
    WidgetFavoriteComponent,
    WidgetSuggestComponent,
    WidgetCitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Ng2CarouselamosModule
  ],
  providers: [
    SedesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
