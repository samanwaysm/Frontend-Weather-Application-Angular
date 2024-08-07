import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { catchError, tap } from 'rxjs';


import Location from '../../models/location.interface';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { LocationService } from '../../services/location.service'; 





@Component({
  selector: 'app-admin-add-location',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,AdminHeaderComponent],
  templateUrl: './admin-add-location.component.html',
  styleUrl: './admin-add-location.component.css'
})
export class AdminAddLocationComponent {

  addLocationForm!: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private LocationServices: LocationService, private route: Router){
    this.addLocationForm = new FormGroup({
      country: new FormControl("", [Validators.required]),
      state: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    })
  }

  async addLocation():Promise<void>{
    this.isFormSubmitted = true;

    if (this.addLocationForm.invalid) {
      return;
    }
    const { country, state, district, city } = this.addLocationForm.value;
    // const data: Location[] = this.addLocationForm.value;
    const data: Location = {
      country,
      state,
      district,
      city,
    };
    console.log('data',data);
    

    const response$ = this.LocationServices.addLocations(data);

    response$.pipe(
      tap((res) => {
        this.isFormSubmitted = false;
        console.log(res, 'locations added');
        this.route.navigate(['/adminHome']);
      }),
      catchError((err: any) => {
        this.isFormSubmitted = false;
        this.addLocationForm.setErrors({ submissionError: true });
        return [];
      })
    ).subscribe();
  }
  }
