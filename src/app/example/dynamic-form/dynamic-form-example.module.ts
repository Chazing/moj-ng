import { NgModule } from "@angular/core";
import { DynamicFormExampleComponent } from "./dynamic-form-example.component";
import { MojSharedModule, MojDynamicFormModule } from '@moj/moj-ng';



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
