import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    PageListProductsComponent,
    PageEditProductComponent,
    PageAddProductComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
