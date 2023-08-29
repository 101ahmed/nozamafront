import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageReturnsComponent } from './pages/page-returns/page-returns.component';
import { ReturnsRoutingModule } from './returns-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageReturnsComponent
  ],
  imports: [
    CommonModule,
    ReturnsRoutingModule,
    
  ]
})
export class ReturnsModule { }
