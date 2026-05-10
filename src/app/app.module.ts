import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DealsPageComponent } from './pages/deals/deals-page.component';
import { DepartmentsPageComponent } from './pages/departments/departments-page.component';
import { HomeComponent } from './pages/home/home.component';
import { StaticInfoPageComponent } from './pages/static-info/static-info-page.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CategoryPageComponent,
    DealsPageComponent,
    DepartmentsPageComponent,
    StaticInfoPageComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
