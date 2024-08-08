import { Component, ElementRef, ViewChild } from '@angular/core';
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
  errorMessage: string | null = null;
  loading: boolean = false;

  @ViewChild('weatherContainer') weatherContainer!: ElementRef;
  
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
      this.excelService.parseExcel(this.file).then((data: any[]) => {
        this.errorMessage = null; 
        if (this.validateData(data)) {
          console.log(data);
          this.checkDataInDatabase(data);
        } else {
          this.errorMessage = 'The file format is incorrect. Please ensure the file contains the correct data format.';
        }
      }).catch((error) => {
        console.error('Error parsing Excel file:', error);
        this.errorMessage = 'An error occurred while parsing the Excel file.';
      });
    }
  }

  validateData(data: any[]): boolean {
    return data.every(row => row.length === 4);
  }

  checkDataInDatabase(data: any[]): void {
    data.forEach((row: any[]) => {
      this.loading = true
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
      this.loading = false;
      this.scrollToWeatherReport();
      console.log(this.weatherData);
    }, (error: any) => {
      console.error('Error fetching weather data:', error);
      this.loading = false;
    });
  }

  scrollToWeatherReport(): void {
    if (this.weatherContainer) {
      this.weatherContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
