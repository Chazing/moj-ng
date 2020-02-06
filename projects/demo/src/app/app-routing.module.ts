import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    //{ path: "", pathMatch: 'full', redirectTo: 'components-demo' },
    {
        path: "buttons", loadChildren: () =>
            import("./buttons-demo/buttons-demo.module").then(am => am.ButtonsDemoModule)
    },
    {
        path: "components", loadChildren: () =>
            import("./components-demo/components-demo.module").then(am => am.ComponentsDemoModule)
    },
    {
        path: "content-layout/wizard-demo", loadChildren: () =>
            import("./content-layout-demo/wizard-demo/wizard-demo.module").then(am => am.WizardDemoModule)
    },
    {
        path: "content-layout/tabs-demo", loadChildren: () =>
            import("./content-layout-demo/tabs-visible-demo/tabs-visible-demo.module").then(am => am.TabsVisibleDemoModule)
    },
    {
        path: "content-layout/panels-demo", loadChildren: () =>
            import("./content-layout-demo/panels-demo/panels-demo.module").then(am => am.PanelsDemoModule)
    },

    {
        path: "forms", loadChildren: () =>
            import("./forms-demo/forms-demo.module").then(am => am.FormsDemoModule)
    },
    {
        path: "misc", loadChildren: () =>
            import("./misc-demo/misc-demo.module").then(am => am.MiscDemoModule)
    },
    {
        path: "overlay", loadChildren: () =>
            import("./overlay-demo/overlay-demo.module").then(am => am.OverlayDemoModule)
    },
   
    {
        path: "security", loadChildren: () =>
            import("./security-demo/security-demo.module").then(am => am.SecurityDemoModule)
    },
    {
        path: "data/grid-demo", loadChildren: () =>
            import("./data-display-demo/grid/grid-demo.module").then(am => am.GridDemoModule)
    },
    {
        path: "data/list-demo", loadChildren: () =>
            import("./data-display-demo/list-demo/list-demo.module").then(am => am.ListDemoModule)
    },
    {
        path: "site", loadChildren: () =>
            import("./demo-site-internal/demo-site-internal.module").then(am => am.DemoSiteInternalModule)
    },
    {
        path: "cards-demo", loadChildren: () =>
            import("./cards-demo/cards-demo.module").then(am => am.CardsDemoModule)
    }
   
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }