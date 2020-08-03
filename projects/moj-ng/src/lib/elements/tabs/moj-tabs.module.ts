import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MojTabsComponent } from './components/moj-tabs/moj-tabs.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';
import { DynamicTabPanelComponent } from './components/moj-tabs/moj-dynamic-tab-panel.component';
import { MojUrlTabsComponent } from './components/moj-url-tabs/moj-url-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    TabViewModule
  ],
  declarations: [MojTabsComponent, MojUrlTabsComponent, DynamicTabPanelComponent],
  exports: [MojTabsComponent, MojUrlTabsComponent]

})
export class MojTabsModule { }
