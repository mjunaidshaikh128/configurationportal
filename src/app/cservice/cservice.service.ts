import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CserviceService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<any> {
    return this.http.get('http://localhost:3000/service');
  }

  createService(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/service', body);
  }
  editService(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/service/${id}`, body);
  }
  deleteService(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/service/${id}`);
  }}

