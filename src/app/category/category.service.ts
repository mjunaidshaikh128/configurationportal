import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });


  constructor(private http: HttpClient, private router: Router) { }

  getAllCategories(): Observable<any> {
    return this.http.get('http://localhost:3000/category');
  }

  createCategory(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/category', body);
  }
  editCategory(body: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/category/${id}`, body, {
      headers: this.headers,
    });
  }
  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/category/${id}`);
  }

}
