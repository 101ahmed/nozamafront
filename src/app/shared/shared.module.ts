import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { AdminModule } from '../admin/admin.module';
import { ContactModule } from '../contact/contact.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    CatalogueModule,
    AdminModule,
    ContactModule,
   ReactiveFormsModule
    
   ]
})
export class SharedModule { }
