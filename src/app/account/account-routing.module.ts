import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MyInformationsComponent } from './pages/my-informations/my-informations.component';

const routes: Routes = [
  {path:'', redirectTo:'my-account', pathMatch: 'full' },
  {path: 'my-orders', component: MyOrdersComponent },
  {path: 'change-password', component: ChangePasswordComponent },
  {path: 'my-informations', component: MyInformationsComponent },

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
