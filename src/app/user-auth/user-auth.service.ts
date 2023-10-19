import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });


  constructor(private http: HttpClient, private router: Router) { }

  Login(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/auth/login', body, {
      headers: this.headers,
    });
  }
}
