import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPassword } from 'src/app/login/models/reset-password.model';
import { ConfirmPasswordValidator } from 'src/app/login/support/confirm-password.validator';
import { ChangePassword } from '../../models/changePassword';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  changePasswordForm!:FormGroup;
  emailToReset!: string;
  emailToken!: string;
  changePassWordObj = new ChangePassword();

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      password:[null, Validators.required],
      confirmPassword: [null, Validators.required]
    },{
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    });
  }

  onReset(){
    if(this.changePasswordForm.valid){
      console.log(this.changePasswordForm.value);
      //send the object to database
    }else{
      
      alert("La formulaire n'a pas été validé");
    }
  }
}
