import { NgModule } from "@angular/core";
import { MojDynamicFormModule } from "../../moj-ng/elements/dynamic-form/dynamic-form.module";
import { DynamicFormExampleComponent } from "./dynamic-form-example.component";
import { MojSharedModule } from "../../moj-ng";



@NgModule({
    imports: [
        MojSharedModule,
        MojDynamicFormModule
    ],
    exports: [DynamicFormExampleComponent],
    declarations: [
        DynamicFormExampleComponent
    ]
})
export class DynamicFormExampleModule { }
