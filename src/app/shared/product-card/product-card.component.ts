import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  constructor(private readonly cart: CartService) {}

  addToCart(): void {
    this.cart.addProduct(this.product, 1);
  }

  filledStars(rating: number): number[] {
    const full = Math.floor(Math.min(5, Math.max(0, rating)));
    return Array.from({ length: full }, (_, i) => i);
  }

  emptyStars(rating: number): number[] {
    const full = Math.floor(Math.min(5, Math.max(0, rating)));
    return Array.from({ length: 5 - full }, (_, i) => i);
  }
}
