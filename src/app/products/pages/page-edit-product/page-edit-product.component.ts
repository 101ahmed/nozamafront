import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-product',
  templateUrl: './page-edit-product.component.html',
  styleUrls: ['./page-edit-product.component.scss']
})
export class PageEditProductComponent implements OnInit {

  @Input() id!: number;

  product$!: Observable<Product>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
      
    this.product$ = this.productsService.getProductById(this.id);
  }
  
  goToProductsList() : void {
  this.router.navigate(['/','products','list']);
}

  updateProduct(product: Product) : void {

  this.productsService.putProduct({...product, id: this.id}).subscribe(
    (res: Product) : void => {
      this.goToProductsList();
    });

  
    
    }
  
}
