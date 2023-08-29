import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsRoutingModule } from './returns-routing.module';
import { PageReturnsComponent } from './pages/page-returns/page-returns.component';


@NgModule({
  declarations: [
    PageReturnsComponent
  ],
  imports: [
    CommonModule,
    ReturnsRoutingModule
  ]
})
export class ReturnsModule { }
