import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-page-add-product',
  templateUrl: './page-add-product.component.html',
  styleUrls: ['./page-add-product.component.scss']
})
export class PageAddProductComponent {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {
  }

  createProduct(product: Product) {
    this.productService.postProduct(product)
      .subscribe((res) => {
        this.goToProductList();
      });
  }

  goToProductList() {
    this.router.navigate(['/', 'products', 'list']);
  }
}




