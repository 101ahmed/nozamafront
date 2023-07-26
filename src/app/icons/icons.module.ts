import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { StartComponent } from './components/start/start.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    StartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    StartComponent
  ]
})
export class IconsModule { }
