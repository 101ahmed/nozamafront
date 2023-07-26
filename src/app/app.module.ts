import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule, 
    CoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


