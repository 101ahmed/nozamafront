import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './userForm/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PageAddUserComponent,
    PageEditUserComponent,
    PageListUsersComponent,
    UserFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule

    
  ]
})
export class UsersModule { }
