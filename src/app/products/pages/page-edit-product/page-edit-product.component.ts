import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-product',
  templateUrl: './page-edit-product.component.html',
  styleUrls: ['./page-edit-product.component.scss']
})
export class PageEditProductComponent implements OnInit {

  @Input() id!: number;

  product$!: Observable<Products>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product$ = this.productsService.getProductbyId(this.id);
  }

  // protected readonly faSpinner = this.faSpinner;

  getToProductsList() : void {
    this.router.navigate(['/', 'products','list']);
  }

  updateProduct(product : Products) : void {
    
    this.productsService.putProduct({...product, id: this.id}).subscribe(
      (res: Products) : void=> {
        this.getToProductsList();
      }
    );
  }
}
