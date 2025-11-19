import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl="https://fakestoreapi.com/products";

  constructor(private http:HttpClient){}

   // Get all products
    getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

   // Get single product by ID
   getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Get all categories
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }
}
