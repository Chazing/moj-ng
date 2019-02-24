import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MojTabsComponent } from './components/moj-tabs/moj-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule   
  ],
  declarations: [MojTabsComponent],
  exports: [MojTabsComponent]
 
})
export class MojTabsModule { }
