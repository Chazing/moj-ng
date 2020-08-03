import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojProgressComponent } from './moj-progress.component';

@NgModule({
  declarations: [MojProgressComponent],
  imports: [
    CommonModule
  ],
  exports:[MojProgressComponent]
})
export class MojProgressModule { }
