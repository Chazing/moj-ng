import { MojLabelModule } from './../label/moj-label.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsCardComponent } from './options-card/options-card.component';

@NgModule({
  declarations: [OptionsCardComponent],
  exports: [OptionsCardComponent],
  imports: [
    CommonModule,MojLabelModule
  ]
})
export class CardsModule { }
