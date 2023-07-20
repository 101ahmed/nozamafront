import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPassword } from '../../models/reset-password.model';
import { ConfirmPasswordValidator } from '../../support/confirm-password.validator';

@Component({
  selector: 'app-page-reset-password',
  templateUrl: './page-reset-password.component.html',
  styleUrls: ['./page-reset-password.component.scss']
})
export class PageResetPasswordComponent implements OnInit {

  resetPasswordForm!:FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPassWordObj = new ResetPassword();

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password:[null, Validators.required],
      confirmPassword: [null, Validators.required]
    },{
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    });
  }

  onReset(){
    if(this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
      //send the object to database
    }else{
      
      alert("La formulaire n'a pas validé");
    }
  }

  

}
