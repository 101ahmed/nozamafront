
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
