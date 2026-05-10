import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { categoryBySlug, productsByCategorySlug } from '../../data/mock-products';
import { Product } from '../../models/product';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent {
  readonly vm$ = this.route.paramMap.pipe(
    map((pm) => {
      const slug = pm.get('slug') ?? '';
      const category = categoryBySlug(slug);
      const products: Product[] = category ? productsByCategorySlug(slug) : [];
      return { slug, category, products };
    }),
  );

  constructor(private readonly route: ActivatedRoute) {}

  trackById(_index: number, p: Product): string {
    return p.id;
  }
}
