import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    
  ]
})
export class ProductsModule { }
