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
import { ContactModule } from '../contact/contact.module';
import { OffCanvasCartComponent } from './components/off-canvas-cart/off-canvas-cart.component';





@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    OffCanvasCartComponent
  
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
    ContactModule,
    OffCanvasCartComponent
 
    
   ]
})
export class CoreModule { }
