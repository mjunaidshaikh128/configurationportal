import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getAllEquipements(): Observable<any> {
    return this.http.get('http://localhost:3000/equipment');
  }

  createEquipement(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/equipment', body);
  }
  editEquipement(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/equipment/${id}`, body);
  }
  deleteEquipement(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/equipment/${id}`);
  }}
