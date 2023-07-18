import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/users';


interface UserForm {

  lastname: FormControl<string | null>;
  firstname: FormControl<string | null>;
  gender: FormControl<string | null>;
  mobile: FormControl<number | null>;
  mail: FormControl<string | null>;
  birthdate: FormControl<number | null>;

}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user! : User;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() validate: EventEmitter<User> = new EventEmitter<User>();

  titleButton : string = 'Ajouter';
  creationOnGoing : boolean = false;

  public form = this.fb.group<UserForm>({
    lastname: this.fb.control<string | null>(null, [Validators.required]),
    firstname: this.fb.control<string | null>(null, [Validators.required]),
    gender: this.fb.control<string | null>(null, [Validators.required]),
    mobile: this.fb.control<number | null>(null, [Validators.required, Validators.min(10)]),
    mail: this.fb.control<string | null>(null, [Validators.required, Validators.min(0)]),
    birthdate: this.fb.control<number | null>(null, [Validators.required]),

  })

  constructor(
    private fb: FormBuilder,
  
  ) { }

  ngOnInit(): void {
    if(this.user) {
      this.titleButton = 'Modifier'
      this.form.patchValue(this.user);
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
  const user: User =  {...this.form.value} as User;
  this.validate.emit(user);
}

cancelAction(){
  this.cancel.emit();
}
}







