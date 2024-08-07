import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.css'
})
export class WeatherReportComponent {
  // @Input() weatherData: any;

  constructor() { }
  // weatherData = {
  //   base: 'stations',
  //   clouds: { all: 100 },
  //   cod: 200,
  //   coord: { lat: 11.75, lon: 75.5333 },
  //   dt: 1723025193,
  //   id: 1254780,
  //   main: {
  //     feels_like: 88.32,
  //     grnd_level: 1004,
  //     humidity: 72,
  //     pressure: 1008,
  //     sea_level: 1008,
  //     temp: 82.71,
  //     temp_max: 82.71,
  //     temp_min: 82.71
  //   },
  //   name: 'Tellicherry',
  //   rain: { '1h': 0.61 },
  //   sys: { country: 'IN', sunrise: 1722991566, sunset: 1723036871 },
  //   timezone: 19800,
  //   visibility: 10000,
  //   weather: [{
  //     description: 'light rain',
  //     icon: '10d',
  //     id: 500,
  //     main: 'Rain'
  //   }],
  //   wind: { speed: 10.8, deg: 294, gust: 14.47 }
  // };
  weatherData = {
    location: {
      city: "Thalassery",
      woeid: 2295305,
      country: "India",
      lat: 11.75346,
      long: 75.504662,
      timezone_id: "Asia/Kolkata"
    },
    current_observation: {
      pubDate: 1723046864,
      wind: {
        chill: 85,
        direction: "NNW",
        speed: 10
      },
      atmosphere: {
        humidity: 92,
        visibility: 2.98,
        pressure: 1010.2
      },
      astronomy: {
        sunrise: "6:16 AM",
        sunset: "6:50 PM"
      },
      condition: {
        temperature: 78,
        text: "Cloudy",
        code: 26
      }
    },
    forecasts: [
      { day: "Wed", date: 1723046400, high: 84, low: 75, text: "Cloudy", code: 26 },
      { day: "Thu", date: 1723132800, high: 84, low: 75, text: "Mostly Cloudy", code: 28 },
      { day: "Fri", date: 1723219200, high: 84, low: 76, text: "Showers", code: 11 },
      { day: "Sat", date: 1723305600, high: 84, low: 76, text: "Cloudy", code: 26 },
      { day: "Sun", date: 1723392000, high: 85, low: 77, text: "Cloudy", code: 26 },
      { day: "Mon", date: 1723478400, high: 87, low: 75, text: "Thunderstorms", code: 4 },
      { day: "Tue", date: 1723564800, high: 86, low: 79, text: "Partly Cloudy", code: 30 },
      { day: "Wed", date: 1723651200, high: 87, low: 78, text: "Mostly Cloudy", code: 28 },
      { day: "Thu", date: 1723737600, high: 86, low: 77, text: "Showers", code: 11 },
      { day: "Fri", date: 1723824000, high: 87, low: 78, text: "Showers", code: 11 },
      { day: "Sat", date: 1723910400, high: 87, low: 75, text: "Thunderstorms", code: 4 }
    ]
  }

  convertFahrenheitToCelsius(fahrenheit: number): number {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  
}
