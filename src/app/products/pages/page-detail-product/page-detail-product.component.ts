import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-detail-product',
  templateUrl: './page-detail-product.component.html',
  styleUrls: ['./page-detail-product.component.scss']
})
export class PageDetailProductComponent implements OnInit{
  @Input() id!: number;
  product$!: Observable<Product>;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
      
    this.product$ = this.productsService.getProductById(this.id);
  }
}
