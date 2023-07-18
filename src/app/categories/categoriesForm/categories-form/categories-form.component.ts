import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Categories } from '../../models/categories';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';


interface CategoriesForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
}

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent {

  @Input() category!: Categories;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() validate: EventEmitter<Categories> = new EventEmitter<Categories>();

  titleButton : string = 'Ajouter';
  creationOnGoing : boolean = false;

  public form = this.fb.group<CategoriesForm>({
    name: this.fb.control<string | null>(null, [Validators.required]),
    description: this.fb.control<string | null>(null, [Validators.required]),
  })

  constructor(
    private fb: FormBuilder,
  
  ) { }

  ngOnInit(): void {
      if(this.category) {
        this.titleButton = 'Modifier'
        this.form.patchValue(this.category);
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
    const category : Categories =  {...this.form.value} as Categories;
    this.validate.emit(category);
  }

  cancelAction(){
    this.cancel.emit();
  }

}
