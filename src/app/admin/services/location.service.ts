import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import Location from '../models/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private api: string = 'http://localhost:4000/api/locations';
  apiUrl: any;

  constructor(private http: HttpClient) {}

  getAllLocations(): Observable<any> {
    const url: string = `${this.api}/getLocations`;
    return this.http.get(
      url,
      this.httpOptions()
    );
  }

  addLocations(locationData: Location): Observable<any> {
    const url: string = `${this.api}/addLocation`;
    return this.http.post(
      url,
      locationData,
      this.httpOptions()
    );
  }

  updateLocation(LocationId: string, data: Location): Observable<any> {
    console.log('upd----',data);
    
    const url: string = `${this.api}/editLocation/${LocationId}`;
    return this.http.put(
      url,
      data,
      this.httpOptions()
    )
  }

  deleteLocation(LocationId: string): Observable<any> {
    const url: string = `${this.api}/deleteLocation/${LocationId}`;
    return this.http.delete(
      url,
      this.httpOptions()
    );
  }

  httpOptions(){
    const tocken: string = localStorage.getItem('token')?? "";
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': tocken
      })
    }
  }
}
