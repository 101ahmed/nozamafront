import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartLine } from '../models/cart-line';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly lines = new BehaviorSubject<CartLine[]>([]);

  /** Full cart contents (immutable snapshots per emission). */
  readonly lines$ = this.lines.asObservable();

  /** Sum of line quantities (badge). */
  readonly itemCount$ = this.lines.pipe(
    map((rows) => rows.reduce((sum, row) => sum + row.quantity, 0)),
  );

  getLinesSnapshot(): CartLine[] {
    return this.lines.value;
  }

  addProduct(product: Product, qty = 1): void {
    const safeQty = Math.max(1, Math.floor(qty));
    const current = this.lines.value;
    const idx = current.findIndex((l) => l.product.id === product.id);
    let next: CartLine[];
    if (idx >= 0) {
      next = current.map((l, i) =>
        i === idx ? { ...l, quantity: l.quantity + safeQty } : l,
      );
    } else {
      next = [...current, { product, quantity: safeQty }];
    }
    this.lines.next(next);
  }

  setQuantity(productId: string, quantity: number): void {
    const q = Math.floor(quantity);
    if (q <= 0) {
      this.removeLine(productId);
      return;
    }
    const current = this.lines.value;
    const idx = current.findIndex((l) => l.product.id === productId);
    if (idx < 0) {
      return;
    }
    const next = current.map((l, i) => (i === idx ? { ...l, quantity: q } : l));
    this.lines.next(next);
  }

  removeLine(productId: string): void {
    this.lines.next(this.lines.value.filter((l) => l.product.id !== productId));
  }

  clear(): void {
    this.lines.next([]);
  }

  subtotal(lines: CartLine[]): number {
    return lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  }
}
