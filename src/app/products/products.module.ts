import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsRoutingModule } from './products-routing.module';
import { PageListProductsComponent } from './pages/page-list-products/page-list-products.component';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { PageDetailProductComponent } from './pages/page-detail-product/page-detail-product.component';




@NgModule({
  declarations: [
    PageListProductsComponent,
    PageAddProductComponent,
    PageEditProductComponent,
    ProductFormComponent,
    SearchComponent,
    FilterComponent,
    PageDetailProductComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class ProductsModule { }
