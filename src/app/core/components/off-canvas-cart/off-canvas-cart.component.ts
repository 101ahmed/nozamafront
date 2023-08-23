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
  selectedValue: { [productId: number]: number } = {};
  total: number = 0;
  products: Product[] = [];

  calculateResult(price: number, quantity: number): number {
    // Effectuer le calcul en utilisant la quantité sélectionnée
    const result = price * quantity;
    return result;
  }

calculateTotal(products : Product[]): number {
    let total = 0;
    for (const product of products) {
      const quantity = this.selectedValue[product.id] || 1; // Utilisez 1 si la quantité n'est pas définie pour ce produit
      total += product.price * quantity;
    }
    return total;
  }
  
  constructor(private productsService: ProductsService) 
  {
    this.data.subscribe(products => {
      for (const product of products) {
        this.selectedValue[product.id] = 1;
      }
    });
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


