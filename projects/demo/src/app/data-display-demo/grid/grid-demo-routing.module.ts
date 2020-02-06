import { MojColumnsDemoComponent } from './moj-columns-demo/moj-columns-demo.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AGGridDemoComponent } from "./ag-grid/ag-grid-demo.component";
import { EditGridDemoComponent } from "./edit-grid/edit-grid-demo.component";
import { EditInlineDemoComponent } from './edit-inline-demo/edit-inline-demo.component';
import { EditPopupDemoComponent } from "./edit-popup-demo/edit-popup-demo.component";
import { QuickFilterDemoComponent } from "./quick-filter/quick-filter-demo.component";

const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'grid' },
    { path: 'grid', component: AGGridDemoComponent },
    { path: 'edit-inline', component: EditInlineDemoComponent },
    { path: 'grid-edit', component: EditGridDemoComponent },
    { path: 'edit-popup', component: EditPopupDemoComponent },
    { path: 'quick-filter', component: QuickFilterDemoComponent },
    { path: 'columns', component: MojColumnsDemoComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GridDemoRoutingModule { }