import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selectedValue: { [productId: number]: number } = {}; // Utiliser un objet pour stocker les valeurs sélectionnées

  calculateResult(price: number, quantity: number): number {
    // Effectuer le calcul en utilisant la quantité sélectionnée
    const result = price * quantity;
    return result;
  }

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {

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
  
}
