import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MojBackOfficeModule } from "../../moj-ng/elements/back-office/back-office.module";
import { AppMainTab } from "./tabs-example/app-main-tab/app-main-tab.component";
import { SubTab1 } from "./tabs-example/app-main-tab/sub-tab1.component";
import { SubTab2 } from "./tabs-example/app-main-tab/sub-tab2.component";
import { MainTab2Module } from "./tabs-example/main-tab2/main-tab2.module";
import { BOExampleComponent } from "./tabs-example/bo-example.component";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { MojInputModule } from "../../moj-ng/elements/input.module";
import { MainTab3Component } from './tabs-example/main-tab3/main-tab3.component';
import { MojTabsModule } from "../../moj-ng/elements/tabs/moj-tabs.module";
import { MainTab4Component } from "./tabs-example/main-tab3/main-tab4.component";
import { MainTab5Component } from "./tabs-example/main-tab3/main-tab5.component";
import { MainTab6Component } from "./tabs-example/main-tab3/main-tab6.component";
import { MainTab7Component } from "./tabs-example/main-tab3/main-tab7.component";
import { MainTab8Component } from "./tabs-example/main-tab3/main-tab8.component";
import { NavigationService } from "../../moj-ng/elements/tabs/services/navigation.service";
import { MojFileUploadModule } from "../../moj-ng/elements/file-upload/moj-file-upload.module";

@NgModule({
    imports: [
        CommonModule,
        MojSharedModule, MojInputModule, MojTabsModule,
        MojBackOfficeModule, MojFileUploadModule,
        RouterModule.forChild([
            { path: '', pathMatch: "full", redirectTo: 'root' },
            { path: "root", component: BOExampleComponent, children: [
                { path: '', pathMatch: "full", redirectTo: 'main' },
                { path: 'main', component: AppMainTab, children: [
                    { path: "", pathMatch: "full", redirectTo: 'sub-tab1' },
                    { path: "sub-tab1", component: SubTab1 },
                    { path: "sub-tab2", component: SubTab2 }
                ]},
                { path: "tab2", loadChildren: getMainTab2Module },
                { path: "tab3", component: MainTab3Component, canActivate: [NavigationService]},
                { path: "tab4", component: MainTab4Component, canActivate: [NavigationService]},
                { path: "tab5", component: MainTab5Component, canActivate: [NavigationService]},
                { path: "tab6", component: MainTab6Component, canActivate: [NavigationService]},
                { path: "tab7", component: MainTab7Component, canActivate: [NavigationService]},
                { path: "tab8", component: MainTab8Component, canActivate: [NavigationService]}
            ] 
        }
        ])],
    exports: [RouterModule],
    declarations: [BOExampleComponent, AppMainTab, SubTab1, SubTab2, MainTab3Component, MainTab4Component, MainTab5Component, MainTab6Component, MainTab7Component, MainTab8Component ]
})
export class BOExampleModule { }

export function getMainTab2Module(){
    return MainTab2Module;
}