import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PageListProductsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
