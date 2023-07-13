import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/products';


// Voici a quoi va ressembler l'interface a remplir
interface ProductForm {

  productReference: FormControl<number | null>;
  productName: FormControl<string | null>;
  productDescription: FormControl<string | null>;
  productQuantityStock: FormControl<number | null>;
  productPrice: FormControl<number | null>;
  productCategory: FormControl<string | null>;

}


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product!: Products;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() validate: EventEmitter<Products> = new EventEmitter<Products>();

  titleButton : string = 'Ajouter';

  creationOnGoing : boolean = false;

  public form = this.fb.group<ProductForm>({
    productReference this.fb.control<number | null>(null, [Validators.required]),
    productName this.fb.control<string | null>(null, [Validators.required]),
    productDescription this.fb.control<string | null>(null, [Validators.required]),
    productQuantityStock this.fb.control<number | null>(null, [Validators.required]),
    productPrice this.fb.control<number | null>(null, [Validators.required]),
    productCategory this.fb.control<string | null>(null, [Validators.required]),

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
    return this.form.pristine || this.form.valid;
  }

  isDisable() {
    return this.isNotValid() && !this.creationOnGoing;
  }

  submit() {
    this.creationOnGoing = true;
    const product: Products =  {...this.form.value} as Products;
    this.validate.emit(product);
  }

  cancelAction(){
    this.cancel.emit();
  }
}
