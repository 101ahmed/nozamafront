import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private data: BehaviorSubject<Orders[]> = new BehaviorSubject<Orders[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  get data$(): Observable<Orders[]> {
    return this.data.asObservable();
  }

  getOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>('http://localhost:3000/orders');
  }

  getOrderById (id: number): Observable<Orders>{
    return this.http.get<Orders>(`http://localhost:3000/orders/${id}`);
  }

  postOrder(order:Orders): Observable<Orders>{
    return this.http.post<Orders>('http://localhost:3000/orders', order);

  }

  putOrder(order:Orders): Observable<Orders>{
    return this.http.put<Orders>(`http://localhost:3000/orders/${order.id}`, order);

  }

  deleteOrder(order:Orders): Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/orders/${order.id}`);

  }
}
