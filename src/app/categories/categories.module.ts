import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { PageListCategoriesComponent } from './pages/page-list-categories/page-list-categories.component';
import { PageEditCategorieComponent } from './pages/page-edit-categorie/page-edit-categorie.component';
import { PageAddCategorieComponent } from './pages/page-add-categorie/page-add-categorie.component';
import { CategoriesFormComponent } from './categoriesForm/categories-form/categories-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search/search.component';


@NgModule({
  declarations: [
    PageListCategoriesComponent,
    PageEditCategorieComponent,
    PageAddCategorieComponent,
    CategoriesFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoriesModule { }
