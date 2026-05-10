import { Component } from '@angular/core';
import { CATEGORY_TILES, DEAL_PRODUCTS, FEATURED_PRODUCTS } from '../../data/mock-products';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly deals = DEAL_PRODUCTS;
  readonly featured = FEATURED_PRODUCTS;
  readonly categories = CATEGORY_TILES;

  constructor(private readonly cart: CartService) {}

  addToCart(_product: Product): void {
    this.cart.addItems(1);
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
