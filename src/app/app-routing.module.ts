import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { SearchComponent } from './search/search.component';
import { PageCartComponent } from './orders/pages/page-cart/page-cart.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { MyAccountComponent } from './account/pages/my-account/my-account.component';

const routes: Routes = [
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'orders', loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule )},
  {path: 'categories', loadChildren:() => import('./categories/categories.module').then(m => m.CategoriesModule )},
  {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule )},
  {path: 'catalogue', loadChildren:() => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)},
  {path: 'sign-in', component: PageSignInComponent },
  {path: 'sign-up', component: PageSignUpComponent },
  {path: 'forgot-password', component: PageForgotPasswordComponent},
  {path: 'reset-password', component: PageResetPasswordComponent},
  {path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'search/:query', component: SearchComponent},
  {path: 'cart', component: PageCartComponent},
  {path: 'account', component: MyAccountComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent},

 
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules,
      bindToComponentInputs: true
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

