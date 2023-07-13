import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpProduct
  ) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`http://localhost:3000/products`);
  }
  
  getProductById(id:number): Observable<Products> {
    return this.http.get<Products>(`http://localhost:3000/products/${id}`);
  }

  postProduct(product : Products): Observable<Products> {
    return this.http.post<Products>(`http://localhost:3000/products`, product);
  }

  putProduct(product: Products): Observable<Products> {
    return this.http.put<Products>(`http://localhost:3000/products/${product.id}`), product;
  }

  deleteProductById(id: number): Observable<Products> {
    return this.http.delete<Products>(`http://localhost:3000/products/${id}`);
  }
}

