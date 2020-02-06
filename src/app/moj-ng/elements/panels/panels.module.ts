import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojExpansionPanelHeaderComponent } from './moj-expansion-panel/moj-expansion-panel-header/moj-expansion-panel-header.component';
import { TranslateModule } from "@ngx-translate/core";
import { MojExpansionPanelComponent } from './moj-expansion-panel/moj-expansion-panel.component';
import { MojLabelModule } from '../label/moj-label.module';
import { MojPanelComponent } from './moj-panel/moj-panel.component';
import { MojLineModule } from '../general/moj-line.module';


@NgModule({
  declarations: [MojExpansionPanelComponent,  MojExpansionPanelHeaderComponent,MojPanelComponent],
  imports: [
    CommonModule,
    MojLabelModule,   
    TranslateModule,
    MojLineModule
  ], 
  exports:[MojExpansionPanelComponent,MojExpansionPanelHeaderComponent,MojPanelComponent],
 
})
export class PanelsModule { }
