import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PagePaymentComponent } from './pages/page-payment/page-payment.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageEditOrderComponent,
    PageAddOrderComponent,
    OrderFormComponent,
    PageCartComponent,
    PagePaymentComponent,
    SearchComponent
    
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxPayPalModule
  ]
})
export class OrdersModule { }
