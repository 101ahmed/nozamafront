import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit{

  data = new BehaviorSubject<Product[]>([]);

  constructor(
    private productsService: ProductsService
  ) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.productsService.getCart().subscribe((res => {this.data.next(res);}))
  }
  
}
