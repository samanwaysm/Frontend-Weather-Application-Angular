import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from '../models/admin.interface'

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {
  private api: string = 'http://localhost:4000/api/admin';

  constructor(private http: HttpClient) {}

  login(adminData: AdminLogin): Observable<any> {
    const url: string = `${this.api}/login`;
    return this.http.post(
      url,
      adminData,
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
