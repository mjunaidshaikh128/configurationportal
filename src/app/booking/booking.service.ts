import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<any> {
    return this.http.get('http://localhost:3000/booking');
  }

  createBooking(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/booking', body);
  }
  editBooking(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/booking/${id}`, body);
  }
  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/booking/${id}`);
  }
}
