import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {

  constructor(
    private productService: ProductsService,
    private router: Router,

  ) { }

  createProduct(product: Products) {
    this.productService.postProduct(Product)
    .subscribe((res) => {
      this.goToProductList();
    });
    }

    goToProductList() {
      this.router.navigate(['/','products','list']);
    }
  }


