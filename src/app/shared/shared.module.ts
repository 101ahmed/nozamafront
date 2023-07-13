import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import {HttpClientModule} from "@angular/common/http";






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
    HttpClientModule
   ]
})
export class SharedModule { }
