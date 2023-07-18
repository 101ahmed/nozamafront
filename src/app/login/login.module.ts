import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetPasswordComponent,
    PageForgotPasswordComponent
  
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports: [
    PageSignInComponent,
    PageSignUpComponent
  ]
})
export class LoginModule { }
