import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojEntityHeaderComponent } from './moj-entity-header.component';
import { EntityHeaderHeaderComponent } from './entity-header-header.component';
import { EntityHeaderBodyComponent } from './entity-header-body.component';
import { EntityHeaderEditComponent } from './entity-header-edit.component';

@NgModule({
  declarations: [MojEntityHeaderComponent, EntityHeaderHeaderComponent, EntityHeaderBodyComponent, EntityHeaderEditComponent],
  imports: [
    CommonModule
  ],
  exports: [MojEntityHeaderComponent, EntityHeaderHeaderComponent, EntityHeaderBodyComponent, EntityHeaderEditComponent]
})
export class MojEntityHeaderModule { }
