import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { 
  }
  
  get data$(): Observable<Product[]> {
    return this.data.asObservable();
  }

 
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  putProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product);
  }

  deleteProductById(id : number): Observable<Product> {
   return this.http.delete<Product>(`http://localhost:3000/products/${id}`);
    }

  deleteProductCartById(id : number): Observable<Product> {
   return this.http.delete<Product>(`http://localhost:3000/productCart/${id}`);
    }

  searchProduct(query:string){
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);
  }

  // searchProductsByCategory(category: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(`http://localhost:3000/products/?category=${category}`);
  // }

  postProductInCart(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>('http://localhost:3000/productCart', product);
  }

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/productCart');
  }
  
  }