import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly itemCount = new BehaviorSubject(0);

  readonly itemCount$ = this.itemCount.asObservable();

  addItems(qty = 1): void {
    this.itemCount.next(this.itemCount.value + qty);
  }
}
