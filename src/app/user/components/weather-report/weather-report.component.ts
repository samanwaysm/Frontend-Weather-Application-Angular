import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConvertFToCPipe } from '../../pipes/convert-f-to-c.pipe';
import { ConvertDatePipe } from '../../pipes/convert-date.pipe';
import { WeatherIconPipe } from '../../pipes/weather-icon.pipe';

import { WeatherData } from '../../models/weatherData.interface';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [CommonModule,ConvertFToCPipe,ConvertDatePipe,WeatherIconPipe],
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.css'
})
export class WeatherReportComponent {
  @Input() weatherData: WeatherData | undefined;

  constructor() { }

}
