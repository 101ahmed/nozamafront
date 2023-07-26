import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-off-canvas-cart',
  templateUrl: './off-canvas-cart.component.html',
  styleUrls: ['./off-canvas-cart.component.scss']
})
export class OffCanvasCartComponent {
  data = new BehaviorSubject<Product[]>([]);
  total: number = 0;

  constructor(
    private productsService: ProductsService
  ) {

  }

  delete(product: Product) {
    if(confirm("Voulez vous supprimer le produit ?"))
    this.productsService.deleteProductCartById(product.id)
      .subscribe(() => {
        this.getData();
      });
  }
  
  ngOnInit(): void {
    this.getData();
    // this.calculateTotal();
 
  }

  getData(){
    this.productsService.getCart().subscribe((res => {this.data.next(res);}))
  }

  // calculateTotal(){
  //   this.total = this.productsService.calculateTotal();
  // }

}


