import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageDetailProductComponent } from './products/pages/page-detail-product/page-detail-product.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';

const routes: Routes = [
  {path: '', redirectTo:'products',pathMatch:'full'},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'sign-in', component: PageSignInComponent },
  {path: 'sign-up', component: PageSignUpComponent },
  {path: 'forgot-password', component: PageForgotPasswordComponent},
  {path: 'reset-password', component: PageResetPasswordComponent},
 // { path: 'detail/:id', component: PageDetailProductComponent},
  {path: 'orders', loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule )},
  {path: 'categories', loadChildren:() => import('./categories/categories.module').then(m => m.CategoriesModule )},
  {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule )},
  {path: 'catalogue', loadChildren:() => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)},
  {path: 'login', loadChildren:() => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'page-not-found', loadChildren:() => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},
  {path: '**', redirectTo:'page-not-found',pathMatch:'full'},


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
