import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<any> {
    return this.http.get('http://localhost:3000/location');
  }

  createLocation(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/location', body);
  }
  editLocation(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/location/${id}`, body);
  }
  deleteLocation(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/location/${id}`);
  }
}