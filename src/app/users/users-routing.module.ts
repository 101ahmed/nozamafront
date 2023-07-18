import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PageListUsersComponent },
  { path: 'add', component: PageAddUserComponent },
  { path: 'edit/:id', component: PageEditUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
