import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';
import { MojWebsiteModule, MojGridModule, MojSharedModule, MojInputModule } from '@moj/moj-ng';
import { CommonModule } from '@angular/common';
import { ListDemoComponent } from './list-base/list-demo.component';
import { RouterModule } from '@angular/router';
import { ListDesignDemoComponent } from './list-design-demo/list-design-demo.component';
import { ListDesignPanelDemoComponent } from './list-design-panel-demo/list-design-panel-demo.component';
import { ListBODemoComponent } from './list-bo-demo/list-bo-demo.component';
import { EditPopupDemoComponent } from '../../components-demo/edit-popup-demo/edit-popup-demo.component';
import { SortDemoComponent } from './sort/sort-demo.component';
import { DemoSiteInternalModule } from '../../demo-site-internal/demo-site-internal.module';
import { ListFilterDemoComponent } from './list-filter/list-filter-demo.component';

@NgModule({
    imports: [ DataViewModule,MojWebsiteModule,MojGridModule,CommonModule, MojInputModule, DataViewModule, MojSharedModule,DemoSiteInternalModule,
        RouterModule.forChild([
            {path: "", pathMatch: "full", redirectTo: "list-base"},
            {path: "list-base", component: ListDemoComponent},
            {path: "list-design", component: ListDesignDemoComponent},
            {path: "list-design-panel", component: ListDesignPanelDemoComponent},
            {path: "list-bo", component: ListBODemoComponent},
            {path: "sort", component: SortDemoComponent},
            {path: "quick-filter", component: ListFilterDemoComponent}
        ])
    ],
    exports:[ListDemoComponent],
    declarations: [ListDemoComponent,
        ListDesignDemoComponent,
        ListDesignPanelDemoComponent,
        ListDesignPanelDemoComponent,
        ListBODemoComponent,
        EditPopupDemoComponent,
        SortDemoComponent,
        ListFilterDemoComponent],
    //entryComponents: [EditPopupDemoComponent]
})
export class ListDemoModule {

}