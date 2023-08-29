import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Adress } from '../pages/add-adresse/model/adress';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

interface AdressForm {
  firstname: FormControl<string | null>;
    name: FormControl<string | null>;
    mobile: FormControl<number | null>;
    adress: FormControl<string | null>;
    adressCode: FormControl<number | null>;
    town: FormControl<string | null>;
}

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent {
  @Input() adress!: Adress;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() validate: EventEmitter<Adress> = new EventEmitter<Adress>();


  titleButton : string = 'Ajouter';
  creationOnGoing : boolean = false;

  public form = this.fb.group<AdressForm>({
    firstname: this.fb.control<string | null>(null),
    name: this.fb.control<string | null>(null),
    mobile: this.fb.control<number | null>(null),
    adress: this.fb.control<string | null>(null),
    adressCode: this.fb.control<number | null>(null),
    town: this.fb.control<string | null>(null),
    

  })

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {    
    if(this.adress) {
      this.titleButton = 'Modifier'
      this.form.patchValue(this.adress);
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
    const adress: Adress =  {...this.form.value} as Adress;
    this.validate.emit(adress);
  }

  cancelAction(){
    this.cancel.emit();
  }

 
}
