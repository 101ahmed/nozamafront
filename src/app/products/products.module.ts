import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsRoutingModule } from './products-routing.module';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PageListProductsComponent,
    PageAddProductComponent,
    PageEditProductComponent,
    ProductFormComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule
    
  ]
})
export class ProductsModule { }
