import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MojExpansionPanelDemoComponent } from './moj-expansion-panel-demo/moj-expansion-panel-demo.component';
import { MojSharedModule, MojWebsiteModule, MojInputModule } from '@moj/moj-ng';
import { RouterModule } from '@angular/router';
import { DemoSiteInternalModule } from '../../demo-site-internal/demo-site-internal.module';

@NgModule({
  declarations: [MojExpansionPanelDemoComponent],
  imports: [
    CommonModule,
    MojSharedModule,
    MojInputModule,
    MojWebsiteModule,
    DemoSiteInternalModule,    
    RouterModule.forChild([

      { path: 'moj-expansion-panel', component: MojExpansionPanelDemoComponent}])
  ]
})
export class PanelsDemoModule { }
