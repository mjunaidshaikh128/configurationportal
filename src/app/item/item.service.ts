import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get("http://localhost:3000/category");
  }

  getTypes(): Observable<any> {
    return this.http.get("http://localhost:3000/type");
  }

  getOwners(): Observable<any> {
    return this.http.get("http://localhost:3000/owner");
  }
  getLocations(): Observable<any> {
    return this.http.get("http://localhost:3000/location");
  }

  getEquipments(): Observable<any> {
    return this.http.get("http://localhost:3000/equipment");
  }

  createItem(data) {
    return this.http.post("http://localhost:3000/item", data)
  }

  updateItem(data, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/item/${id}`, data)
  }

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:3000/item")
  }
  getItem(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/item/${id}`)
  }

  getServices(): Observable<any> {
    return this.http.get("http://localhost:3000/service")
  }
}
