import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelServiceService } from '../../services/excel-service.service'
import { WeatherServiceService } from '../../services/weather-service.service';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../../../admin/services/location.service';
import { CommonModule } from '@angular/common';
import { WeatherReportComponent } from '../weather-report/weather-report.component';
@Component({
  selector: 'app-upload-excel',
  standalone: true,
  imports: [CommonModule,WeatherReportComponent],
  templateUrl: './upload-excel.component.html',
  styleUrl: './upload-excel.component.css'
})
export class UploadExcelComponent {
  file: File | null = null;
  weatherData: any;
  
  constructor(
    private excelService: ExcelServiceService,
    private weatherService: WeatherServiceService,
    private locationService : LocationService,
    private http: HttpClient
  ) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }


  uploadExcel() {
    if (this.file) {
      this.excelService.parseExcel(this.file).then((data) => {
        console.log(data);
        this.checkDataInDatabase(data);
      }).catch((error) => {
        console.error('Error parsing Excel file:', error);
      });
    }
  }

  checkDataInDatabase(data: any[]): void {
    data.forEach((row: any[]) => {
      const [country, state, district, city] = row;
      this.locationService.checkCity(city).subscribe((response: any) => {
        if (response && response.exists) {
          this.fetchWeather(city);
        }
      }, (error: any) => {
        console.error('Error checking city:', error);
      });
    });
  }

  fetchWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    }, (error: any) => {
      console.error('Error fetching weather data:', error);
    });
  }
}
