import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityLayoutComponent } from './entity-layout/entity-layout.component';
import { EntityFilesComponent } from './entity-files/entity-files.component';
import { EntityDocsComponent } from './entity-docs/entity-docs.component';
import { EntityRequestsComponent } from './entity-requests/entity-requests.component';
import { DataViewModule } from 'primeng/dataview';
import { MojTabsModule, MojGridModule } from '@moj/moj-ng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", redirectTo: "entity-layout"},
      { path: "entity-layout", component: EntityLayoutComponent,
        children: [
          { path: "", pathMatch: "full", redirectTo: "entityFiles"},
          { path: "entityFiles", component: EntityFilesComponent/*,canActivate: [MojGuard],data:{routerID:"#entityFiles"}*/},
          { path: "entityDocs", component: EntityDocsComponent},
          { path: "entityRequests", component: EntityRequestsComponent}
        ]
      }
    ]),
    MojTabsModule, MojGridModule, DataViewModule
  ],
  declarations: [EntityLayoutComponent, EntityFilesComponent, EntityDocsComponent, EntityRequestsComponent],
  entryComponents: [EntityFilesComponent, EntityDocsComponent, EntityRequestsComponent],
  exports: [EntityLayoutComponent, EntityFilesComponent, EntityDocsComponent, EntityRequestsComponent, RouterModule]
})
export class ContentWithTabsModule { }
