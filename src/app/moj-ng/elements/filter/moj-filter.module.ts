import { NgModule } from "@angular/core";
import { MojFilterComponent } from "./moj-filter.component";
import { CommonModule } from "@angular/common";
import { MojTreeFilterComponent } from "./moj-tree-filter/moj-tree-filter.component";
import { MojDynamicFormModule } from "../dynamic-form/dynamic-form.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MojResizableModule } from "../../directives/moj-resizable/moj-resizable-module";
import { MojInputModule } from "../input.module";

@NgModule ({
    imports: [CommonModule, ReactiveFormsModule, MojDynamicFormModule, MojResizableModule,MojInputModule],
    declarations: [MojFilterComponent, MojTreeFilterComponent],
    exports: [MojFilterComponent, MojTreeFilterComponent]
})
export class MojFilterModule {

    
}