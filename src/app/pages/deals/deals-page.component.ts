import { Component } from '@angular/core';
import { DEAL_PRODUCTS } from '../../data/mock-products';

@Component({
  selector: 'app-deals-page',
  templateUrl: './deals-page.component.html',
  styleUrls: ['./deals-page.component.css'],
})
export class DealsPageComponent {
  readonly deals = DEAL_PRODUCTS;
}
