import { Component } from '@angular/core';
import { DEAL_PRODUCTS, FEATURED_PRODUCTS, SHOP_CATEGORIES } from '../../data/mock-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly deals = DEAL_PRODUCTS;
  readonly featured = FEATURED_PRODUCTS;
  readonly categories = SHOP_CATEGORIES;
}
