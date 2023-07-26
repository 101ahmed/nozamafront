import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconSearchComponent } from './components/icon-search/icon-search.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconSearchComponent
  ]
})
export class IconsModule { }
