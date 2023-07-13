import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-page-list-products',
  templateUrl: './page-list-products.component.html',
  styleUrls: ['./page-list-products.component.scss']
})
export class PageListProductsComponent implements OnInit{
  

  //products$: Observable<Product[]> = this.productsService.data$;
  isLoading = true;
  data = new BehaviorSubject<Product[]>([]);

  constructor(
    private productsService: ProductsService
  ) {




  }

  ngOnInit(): void {
    this.getData();
    this.isLoading = true;

  }

  // getData() {
  //   this.productsService.getProducts()
  //     .subscribe(() => this.isloading = false);
  // }
  getData(){
    this.productsService.getProducts().subscribe((res => {this.data.next(res); this.isLoading=false}))
  }

  delete(product: Product) {
    this.productsService.deleteProduct(product)
      .subscribe(() => {
        this.getData();
      });
  }  

}

