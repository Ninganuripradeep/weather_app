import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'], // Correct property name
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  city!: string;
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    });
  }
}
