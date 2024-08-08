import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon',
  standalone: true
})
export class WeatherIconPipe implements PipeTransform {

  private iconMap: { [key: number]: string } = {
    11: 'assets/raining.png',
    26: 'assets/weather-icon.png',
    28: 'assets/cloud.png',
    30: 'assets/weather-icon.png',
    4: 'assets/thunderstorm.png'
  };

  transform(code: number): string {
    return this.iconMap[code] || 'assets/weather-icon.png';
  }

}
