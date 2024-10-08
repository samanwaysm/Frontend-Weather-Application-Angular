import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UploadExcelComponent } from '../upload-excel/upload-excel.component';
import { WeatherReportComponent } from '../weather-report/weather-report.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NavbarComponent,UploadExcelComponent,WeatherReportComponent,FooterComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  
}
