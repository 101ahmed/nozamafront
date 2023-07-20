import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../support/confirm-password.validator';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit{

  signUpForm!: FormGroup;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void{
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
    }else{
      this.validateAllFormFields(this.signUpForm);
      alert("Votre formulaire n'a pas validé");
    }

    
  }
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
}
