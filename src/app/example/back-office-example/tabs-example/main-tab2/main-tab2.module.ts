import { NavigationService } from './../../../../../../projects/moj-ng/src/lib/elements/tabs/services/navigation.service';
import { NgModule } from "../../../../../../node_modules/@angular/core";
import { CommonModule } from "../../../../../../node_modules/@angular/common";
import { RouterModule } from "../../../../../../node_modules/@angular/router";
import { MainTab2Component } from "./main-tab2.component";
import { GridExampleModule } from "../../../grid-example/grid-example.module";
import { Tab2SecondComponent } from "./tab2-second/tab2-second.component";
import { Tab2Side1Component } from "./tab2-side1/tab2-side1.component";
import { Tab2Side3Component } from "./tab2-side3/tab2-side3.component";
import { Tab2Side2Component } from "./tab2-side2/tab2-side2.component";
import {DataViewModule} from 'primeng/dataview';
import { MojSlidePreviewDocModule, MojSharedModule, MojFilterModule } from '@moj/moj-ng';

@NgModule({
    imports: [CommonModule, DataViewModule, MojSharedModule, GridExampleModule, MojSlidePreviewDocModule, MojFilterModule, RouterModule.forChild([
        { path: "", pathMatch: "full", redirectTo: "hello-tab2" },
        { path: "hello-tab2", component: MainTab2Component, canActivate: [NavigationService], children:[
            { path: 'sub1', pathMatch: "full", component:Tab2Side1Component },
            { path: 'sub2', pathMatch: "full", component:Tab2Side2Component /*,data:{routerID:"#sub2"}*/},
            { path: 'sub3', pathMatch: "full", component:Tab2Side3Component },
        ]},
        { path: "hello-tab2-second", component: Tab2SecondComponent, canActivate: [NavigationService]}
    ])],
    exports: [RouterModule],
    declarations: [MainTab2Component, Tab2SecondComponent,Tab2Side1Component,Tab2Side2Component, Tab2Side3Component]
})
export class MainTab2Module {

}