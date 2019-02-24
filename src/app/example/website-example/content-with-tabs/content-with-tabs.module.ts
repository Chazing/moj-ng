import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityLayoutComponent } from './entity-layout/entity-layout.component';
import { EntityFilesComponent } from './entity-files/entity-files.component';
import { EntityDocsComponent } from './entity-docs/entity-docs.component';
import { MojTabsModule } from '../../../moj-ng/elements/tabs/moj-tabs.module';
import { EntityRequestsComponent } from './entity-requests/entity-requests.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", redirectTo: "entity-layout"},
      { path: "entity-layout", component: EntityLayoutComponent, 
        children: [
          { path: "", pathMatch: "full", redirectTo: "entityFiles" },
          { path: "entityFiles", component: EntityFilesComponent},
          { path: "entityDocs", component: EntityDocsComponent},
          { path: "entityRequests", component: EntityRequestsComponent}
        ]
      }
    ]),
    MojTabsModule
  ],
  declarations: [EntityLayoutComponent, EntityFilesComponent, EntityDocsComponent, EntityRequestsComponent],
  exports: [EntityLayoutComponent, EntityFilesComponent, EntityDocsComponent, EntityRequestsComponent, RouterModule]
})
export class ContentWithTabsModule { }
