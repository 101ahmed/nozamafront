import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

// interface QuantityForm {
//   quantityControl: FormControl<number>;
// }

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit{

  // public form = this.fb.group<QuantityForm>({
  //   quantityControl: this.fb.control<number | null>(1, [Validators.required]),
    
  // });

  data = new BehaviorSubject<Product[]>([]);
  selectedValue: { [productId: number]: number } = {};

  constructor(
    private productsService: ProductsService,  
  ){
    this.data.subscribe(products => {
      for (const product of products) {
        this.selectedValue[product.id] = 1;
      }
    });
  }
   // Utiliser un objet pour stocker les valeurs sélectionnées
  calculateResult(price: number, quantity: number): number {
    // Effectuer le calcul en utilisant la quantité sélectionnée
    const result = price * quantity;
    return result;
  }
  calculateCartTotal(products: Product[]): number {
    let total = 0;
    for (const product of products) {
      const quantity = this.selectedValue[product.id] || 1; // Utilisez 1 si la quantité n'est pas définie pour ce produit
      total += product.price * quantity;
    }
    return total;
  }

  ngOnInit(): void {
    this.getData();
    // this.quantityForm = this.fb.group({
    //   quantityControl:[1]
    // });
  }

  getData(){
    this.productsService.getCart().subscribe((res => {this.data.next(res);}))
  }

  delete(product: Product) {
    if(confirm("Voulez vous supprimer le produit ?"))
    this.productsService.deleteProductCartById(product.id)
      .subscribe(() => {
        this.getData();
      });
  }
  
}
