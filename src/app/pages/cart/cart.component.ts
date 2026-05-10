import { Component } from '@angular/core';
import { CartLine } from '../../models/cart-line';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  readonly lines$ = this.cart.lines$;

  constructor(private readonly cart: CartService) {}

  trackByProductId(_index: number, line: CartLine): string {
    return line.product.id;
  }

  subtotal(lines: CartLine[]): number {
    return this.cart.subtotal(lines);
  }

  totalItems(lines: CartLine[]): number {
    return lines.reduce((sum, l) => sum + l.quantity, 0);
  }

  increment(line: CartLine): void {
    this.cart.setQuantity(line.product.id, line.quantity + 1);
  }

  decrement(line: CartLine): void {
    this.cart.setQuantity(line.product.id, line.quantity - 1);
  }

  remove(productId: string): void {
    this.cart.removeLine(productId);
  }

  clear(): void {
    this.cart.clear();
  }
}
