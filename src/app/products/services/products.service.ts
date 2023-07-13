import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient
  ) { }
  
  get data$(): Observable<Product[]> {
    return this.data.asObservable();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
      // .pipe(
      //   tap((products) => this.data.next(products)),
      // );
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  
  deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/products/${product.id}`);
  }


}
