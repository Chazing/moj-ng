import { TranslateModule } from '@ngx-translate/core';
import { MojSharedModule } from './../../shared/moj.shared.module';
import { MojLabelModule } from './../label/moj-label.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojOptionsCardComponent } from './options-card/options-card.component';
import { MojOptionsCardContainerComponent } from './options-card-container/options-card-container.component';
import { MojInputModule } from '../input.module';
import { MojFlipCardComponent } from './flip-card/flip-card.component';
import { MojFlipCardContentComponent } from './flip-card/flip-card-content/flip-card-content.component';
import { FlipCardContainerComponent } from './flip-card/flip-card-container/flip-card-container.component';
import { FlipCardEditComponent } from './flip-card/flip-card-edit/flip-card-edit.component';

@NgModule({
  declarations: [MojOptionsCardComponent, MojOptionsCardContainerComponent, MojFlipCardComponent,MojFlipCardContentComponent, FlipCardContainerComponent, FlipCardEditComponent],
  exports: [MojOptionsCardComponent, MojOptionsCardContainerComponent, MojFlipCardComponent, MojFlipCardContentComponent, FlipCardContainerComponent, FlipCardEditComponent],
  imports: [
    CommonModule, MojLabelModule, MojSharedModule, TranslateModule, MojInputModule
  ]
})
export class MojCardsModule { }
