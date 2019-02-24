import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MojInputModule } from "../../moj-ng/elements/input.module";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormExampleComponent } from "./form-example.component";
import { MojSlidingMenuModule } from "../../moj-ng/elements/sliding-menu/sliding-menu.module";
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MojDirectiveModule } from "../../moj-ng/directives/moj-directive.module";

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, MojDirectiveModule,
        MojInputModule, MojSharedModule, TranslateModule, MojSlidingMenuModule,
    ],
    exports: [FormExampleComponent],
    declarations: [
        FormExampleComponent,
        ReactiveFormExampleComponent
    ]
})
export class FormExampleModule { }
