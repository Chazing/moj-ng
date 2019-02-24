import { NgModule } from "../../../../../../node_modules/@angular/core";
import { CommonModule } from "../../../../../../node_modules/@angular/common";
import { RouterModule } from "../../../../../../node_modules/@angular/router";
import { MainTab2Component } from "./main-tab2.component";
import { NavigationService } from "../../../../moj-ng/elements/tabs/services/navigation.service";
import { GridExampleModule } from "../../../grid-example/grid-example.module";
import { MojSharedModule } from "../../../../moj-ng/shared/moj.shared.module";
import { MojSlidePreviewDocModule } from "../../../../moj-ng/elements/documents/moj-slide-preview-doc/moj-slide-preview-doc.module"

@NgModule({
    imports: [CommonModule, MojSharedModule, GridExampleModule, MojSlidePreviewDocModule, RouterModule.forChild([
        { path: "", pathMatch: "full", redirectTo: "hello-tab2" },
        { path: "hello-tab2", component: MainTab2Component, canActivate: [NavigationService]}
    ])],
    exports: [RouterModule],
    declarations: [MainTab2Component]
})
export class MainTab2Module {

}