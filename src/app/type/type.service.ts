import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAllTypes(): Observable<any> {
    return this.http.get('http://localhost:3000/type');
  }

  createType(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/type', body);
  }
  editType(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/type/${id}`, body);
  }
  deleteType(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/type/${id}`);
  }

}
