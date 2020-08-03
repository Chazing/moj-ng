import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FormExampleComponent } from "./form-example.component";
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { MojDirectiveModule, MojInputModule, MojSharedModule, MojSlidingMenuModule, MojProgressModule, ValidationsModule } from '@moj/moj-ng';

@NgModule({
    imports: [
        CommonModule, MojDirectiveModule,
        MojInputModule, MojSharedModule, TranslateModule, MojSlidingMenuModule, MojProgressModule,ValidationsModule
    ],
    exports: [FormExampleComponent],
    declarations: [
        FormExampleComponent,
        ReactiveFormExampleComponent
    ]
})
export class FormExampleModule { }
