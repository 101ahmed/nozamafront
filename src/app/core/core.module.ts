import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { LoginModule } from '../login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { AdminModule } from '../admin/admin.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
   exports : [
    IconsModule,
    UiModule,
    LoginModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LoginModule,
    CatalogueModule,
    AdminModule,
    
 
    
   ]
})
export class CoreModule { }
