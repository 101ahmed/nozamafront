import { Component } from '@angular/core';
import { SHOP_CATEGORIES } from '../../data/mock-products';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrls: ['./departments-page.component.css'],
})
export class DepartmentsPageComponent {
  readonly categories = SHOP_CATEGORIES;
}
