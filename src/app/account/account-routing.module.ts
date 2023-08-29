import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MyInformationsComponent } from './pages/my-informations/my-informations.component';
import { MyAddressesComponent } from './pages/my-addresses/my-addresses.component';
import { AddAdresseComponent } from './pages/add-adresse/add-adresse.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

const routes: Routes = [
  {path:'', redirectTo:'my-account', pathMatch: 'full' },
  {path: 'my-orders', component: MyOrdersComponent },
  {path: 'change-password', component: ChangePasswordComponent },
  {path: 'my-informations', component: MyInformationsComponent },
  {path: 'my-addresses', component: MyAddressesComponent },
  {path: 'add-adresse', component: AddAdresseComponent },
  {path: 'order-details', component: OrderDetailsComponent },

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
