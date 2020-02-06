import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormValidationsDemoComponent } from './form-validations-demo/form-validations-demo.component';
import { FormValidationsDemo2Component } from './form-validations-demo2/form-validations-demo2.component';
import { FormsModule } from '@angular/forms';
import { MojWebsiteModule, MojInputModule, MojSharedModule } from '@moj/moj-ng';
import { NestedFormComponent } from './form-validations-demo/nested-form/nested-form.component';

@NgModule({
    declarations: [FormValidationsDemoComponent , FormValidationsDemo2Component, NestedFormComponent ],
    imports: [
        CommonModule, FormsModule, MojWebsiteModule, MojInputModule, MojSharedModule, RouterModule.forChild([
            { path: "form-validations-demo", component: FormValidationsDemoComponent },
            { path: "form-validations-demo2", component: FormValidationsDemo2Component }
        ])
    ]
})
export class FormsDemoModule { }
