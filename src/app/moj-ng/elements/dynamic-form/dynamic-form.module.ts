import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MojDynamicFormComponent } from './dynamic-form.component';
import { MojDynamicFieldDirective } from './dynamic-field.directive';
import { MojDynamicTextboxComponent, MojDynamicAutoCompleteComponent, MojDynamicDatePickerComponent, MojDynamicDropdownComponent, MojDynamicLabelForComponent, MojDynamicCheckboxComponent, MojDynamicTextAreaComponent, MojDynamicMultiSelectComponent } from './dynamic-components';
import { MojSharedModule } from '../../shared/moj.shared.module';
import { MojInputModule } from '../input.module';

@NgModule({
    declarations: [MojDynamicFormComponent,
        MojDynamicFieldDirective,
        MojDynamicLabelForComponent,
        MojDynamicTextboxComponent,
        MojDynamicTextAreaComponent,
        MojDynamicDropdownComponent,
        MojDynamicAutoCompleteComponent,
        MojDynamicDatePickerComponent,
        MojDynamicMultiSelectComponent,
        MojDynamicCheckboxComponent],
    imports: [ReactiveFormsModule,
        MojSharedModule,
        MojInputModule],
    exports: [MojDynamicFormComponent],
    entryComponents: [
        MojDynamicLabelForComponent,
        MojDynamicTextboxComponent,
        MojDynamicTextAreaComponent,
        MojDynamicDropdownComponent,
        MojDynamicAutoCompleteComponent,
        MojDynamicMultiSelectComponent,
        MojDynamicDatePickerComponent,
        MojDynamicCheckboxComponent
    ]
})
export class MojDynamicFormModule {
}
