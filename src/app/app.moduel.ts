import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent//this is added
  ],
  imports: [
    BrowserModule,
    HttpClientModule//this added
  ],
  providers:[WeatherService],//this is added
  bootstrap: [AppComponent]
})
export class AppModule { }
