import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";


import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';






@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
   exports:[
    IconsModule,
    UiModule,
    HttpClientModule,
    
   ]
})
export class SharedModule { }
