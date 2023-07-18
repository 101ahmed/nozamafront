import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)}

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
