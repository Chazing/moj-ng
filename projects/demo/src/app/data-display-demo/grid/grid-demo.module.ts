import { DemoSiteInternalModule } from './../../demo-site-internal/demo-site-internal.module';
import { NgModule } from "@angular/core";
import { MojGridModule, MojSharedModule, MojInputModule, MojWebsiteModule } from "@moj/moj-ng";
import { AGGridDemoComponent } from "./ag-grid/ag-grid-demo.component";
import { QuickFilterDemoComponent } from "./quick-filter/quick-filter-demo.component";
import { EditGridDemoComponent } from "./edit-grid/edit-grid-demo.component";
import { EditGridComponentDemoComponent } from "./edit-grid/edit-grid-component.component";
import { GridDemoRoutingModule } from "./grid-demo-routing.module";
import { EditInlineDemoComponent } from './edit-inline-demo/edit-inline-demo.component';
import { EditPopupDemoComponent } from './edit-popup-demo/edit-popup-demo.component';
import { MojColumnsDemoComponent } from './moj-columns-demo/moj-columns-demo.component';
import { ActionPopupDemoComponent } from './action-poup-demo/action-popup-demo.component';


@NgModule({
    imports: [
        MojGridModule,
        MojSharedModule,
        MojInputModule,
        MojWebsiteModule,
        DemoSiteInternalModule,
        GridDemoRoutingModule
    ],
    exports: [MojGridModule,
        AGGridDemoComponent,
        QuickFilterDemoComponent,
        EditGridDemoComponent
    ],
    declarations: [
        AGGridDemoComponent,
        QuickFilterDemoComponent,
        EditGridDemoComponent,
        EditGridComponentDemoComponent,
        EditInlineDemoComponent,
        EditPopupDemoComponent,
        MojColumnsDemoComponent,
        ActionPopupDemoComponent
    ],
    entryComponents: [
        EditGridComponentDemoComponent
    ]
})
export class GridDemoModule { }
