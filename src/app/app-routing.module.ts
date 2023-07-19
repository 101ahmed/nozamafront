import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'orders', loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule )},
  {path: 'categories', loadChildren:() => import('./categories/categories.module').then(m => m.CategoriesModule )},
  {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule )},
  {path: 'login', loadChildren:() => import('./login/login.module').then(m => m.LoginModule )},
  {path:'page-not-found', loadChildren:() => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)},
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
