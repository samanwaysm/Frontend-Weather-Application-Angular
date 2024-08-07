import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  // private apiKey = 'f0349abef1msh6e50bee69956323p1bb690jsnf45b7de84f4e';
  // private apiUrl = 'https://open-weather13.p.rapidapi.com/city';
  private apiKey = 'f0349abef1msh6e50bee69956323p1bb690jsnf45b7de84f4e';
  private apiUrl = 'https://yahoo-weather5.p.rapidapi.com/weather?location';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      // 'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    });

    // return this.http.get(`${this.apiUrl}/${cityName}/EN`, { headers })
      return this.http.get(`${this.apiUrl}=${cityName}`, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching weather data:', error);
          return throwError(error);
        })
      );
  }
}
