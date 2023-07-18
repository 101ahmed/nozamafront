import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../models/product';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

// Voici a quoi va ressembler l'interface a remplir
interface ProductForm {

  reference: FormControl<string | null>;
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  quantityStock: FormControl<number | null>;
  price: FormControl<number | null>;
  category: FormControl<string | null>;

}


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product!: Product;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() validate: EventEmitter<Product> = new EventEmitter<Product>();

  titleButton : string = 'Ajouter';
  creationOnGoing : boolean = false;

  public form = this.fb.group<ProductForm>({
    reference: this.fb.control<string | null>(null, [Validators.required]),
    name: this.fb.control<string | null>(null, [Validators.required]),
    description: this.fb.control<string | null>(null, [Validators.required]),
    quantityStock: this.fb.control<number | null>(null, [Validators.required, Validators.min(0)]),
    price: this.fb.control<number | null>(null, [Validators.required, Validators.min(0)]),
    category: this.fb.control<string | null>(null, [Validators.required]),

  })

  constructor(
    private fb: FormBuilder,
  
  ) { }

  ngOnInit(): void {
      if(this.product) {
        this.titleButton = 'Modifier'
        this.form.patchValue(this.product);
      }
  }

  isNotValid() {
    return this.form.pristine || !this.form.valid;
  }

  isDisable() {
    return this.isNotValid() && !this.creationOnGoing;
  }

  submit() {
    this.creationOnGoing = true;
    const product: Product =  {...this.form.value} as Product;
    this.validate.emit(product);
  }

  cancelAction(){
    this.cancel.emit();
  }
}
