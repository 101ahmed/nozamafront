import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Orders } from '../models/orders';


interface OrderForm {
  idUser: FormControl<number | null>;
  status: FormControl<string | null>;
  date: FormControl<string | null>;
  price: FormControl<number | null>;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  @Input() order!:Orders;

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() validate: EventEmitter<Orders> = new EventEmitter<Orders>();

  titleButton: string ='Ajouter';
  creationOnGoing: boolean = false;

  public form = this.fb.group<OrderForm>({
    idUser: this.fb.control<number | null>(null, [Validators.required]),
    status: this.fb.control<string | null>(null, [Validators.required]),
    date: this.fb.control<string | null>(null, [Validators.required]),
    price: this.fb.control<number | null>(null, [Validators.required]),
    

  });
  constructor(
    private fb:  FormBuilder,  
  ){}

  ngOnInit(): void {
    if(this.order){
      this.titleButton = 'Modifier';
      this.form.patchValue(this.order);
    }
  }

  isNotValid() {
    return this.form.pristine || !this.form.valid;
  }

  isDisabled(){
    return this.isNotValid() && !this.creationOnGoing;
  }
  
  submit(): void{
    this.creationOnGoing = true;
    const order : Orders = {...this.form.value} as Orders;
    this.validate.emit(order);
  }

  cancelAction(): void {
    this.cancel.emit();
  }
}
