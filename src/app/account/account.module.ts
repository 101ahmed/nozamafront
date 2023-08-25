import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyInformationsComponent } from './pages/my-informations/my-informations.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MyAddressesComponent } from './pages/my-addresses/my-addresses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AddAdresseComponent } from './pages/add-adresse/add-adresse.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    MyOrdersComponent,
    MyInformationsComponent,
    ChangePasswordComponent,
    MyAddressesComponent,
    HomeComponent,
    AddAdresseComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MyAccountComponent
  ]
})
export class AccountModule { }
