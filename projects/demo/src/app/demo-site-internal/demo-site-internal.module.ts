import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoLinksComponent } from './demo-links/demo-links.component';
import { RouterModule } from '@angular/router';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { MojSharedModule, MojWebsiteModule, MojInputModule } from '@moj/moj-ng';
import { BackToCatalogComponent } from './back-to-catalog/back-to-catalog.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DemoHomeComponent, DemoLinksComponent, CommingSoonComponent, BackToCatalogComponent, DemoContainerComponent],
  imports: [
    CommonModule, MojSharedModule,MojInputModule ,MojWebsiteModule,TranslateModule,RouterModule.forChild([
      { path: "", pathMatch: "full", component: DemoHomeComponent },
      { path: "comming-soon", pathMatch: "full", component: CommingSoonComponent},
    ])],
  exports: [DemoHomeComponent, DemoLinksComponent, CommingSoonComponent, BackToCatalogComponent, DemoContainerComponent],
})
export class DemoSiteInternalModule { }
