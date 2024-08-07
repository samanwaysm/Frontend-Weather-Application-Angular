import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { RouterLink } from '@angular/router';
import Location from '../../models/location.interface';
import { LocationService } from '../../services/location.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterLink,AdminHeaderComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  locations!: Location[];
  private locationsData!: Location[];
  locationDeleteId: string = '';

  constructor(private locationService: LocationService) {
    this.loadAllLocations();
  }

  private loadAllLocations(): void {
    
    this.locationService.getAllLocations().pipe(
      tap((res) => {
        if(res.locationData) {
          this.locationsData = res.locationData as Location[];
          this.locations = this.locationsData;
        }
      }),
      catchError((err: any) => {
        console.log('working err');
        console.error(err);
        return [];
      })
    ).subscribe();
  }

  filterLocationData(event: string): void {
    this.locations = this.locationsData.filter((each: Location) => {
      return (
        each.country.toLowerCase().includes(event.toLowerCase()) ||
        each.state.toLowerCase().includes(event.toLowerCase()) ||
        each.district.toLowerCase().includes(event.toLowerCase()) ||
        each.city.toLowerCase().includes(event.toLowerCase())
      );
    });
  }

  editLocation(locationId: string): void {
    // Implement the logic to edit a location
    // For example, navigate to the edit page:
    // this.router.navigate(['/adminEditLocation', locationId]);
  }

  deleteLocation(locationId: string): void {
    this.locationDeleteId = locationId;
  }

  closeModal(): void {
    this.locationDeleteId = '';
  }

  confirmDelete(event: any): void {
    event.stopPropagation();
    this.locationService.deleteLocation(this.locationDeleteId).pipe(
      tap((res) => {
        if (res.message) {
          this.loadAllLocations();
          this.locationDeleteId = '';
        }
      }),
      catchError((err: any) => {
        console.error(err);
        return [];
      })
    ).subscribe();
  }
}
