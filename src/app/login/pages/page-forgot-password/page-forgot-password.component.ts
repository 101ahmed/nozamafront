import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-page-forgot-password',
  templateUrl: './page-forgot-password.component.html',
  styleUrls: ['./page-forgot-password.component.scss']
})
export class PageForgotPasswordComponent implements OnInit {

  public resetPassWordEmail!: string;
  public isValidEmail!: boolean;

  forgotPasswordForm!: FormGroup;
  email!: string
  
  
  constructor( 
    private fb: FormBuilder,
    private resetPassword: ServicesService
    ){}
  
  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
     });
    
  }

  checkValidEmail(event: string){
    const value = event;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }
  confirmToSend(){
    if(this.checkValidEmail(this.resetPassWordEmail)){
      console.log(this.resetPassWordEmail);
      

      this.resetPassword.sendResetPasswordLink(this.resetPassWordEmail)
      .subscribe({
        next:(res) =>{
          this.resetPassWordEmail="";
          const buttonRef = document.getElementById("closeBtn");
          buttonRef?.click();
        },
        error:(err)=>{
                    
        }
      })
    }
  }

}
