import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<any> {
    return this.http.get('http://localhost:3000/owner');
  }

  createOwner(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/owner', body);
  }
  editOwner(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/owner/${id}`, body);
  }
  deleteOwner(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/owner/${id}`);
  }

}
