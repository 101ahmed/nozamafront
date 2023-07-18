import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListCategoriesComponent } from './pages/page-list-categories/page-list-categories.component';
import { PageAddCategorieComponent } from './pages/page-add-categorie/page-add-categorie.component';
import { PageEditCategorieComponent } from './pages/page-edit-categorie/page-edit-categorie.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
{ path: 'list', component: PageListCategoriesComponent },
{ path: 'add', component: PageAddCategorieComponent },
{ path: 'edit/:id', component: PageEditCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
