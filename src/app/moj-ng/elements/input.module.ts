import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { AutoCompleteModule, CalendarModule, DropdownModule, MultiSelectModule } from "primeng/primeng";
import { MojCheckboxComponent } from "./checkbox/moj-checkbox.component";
import { MojAutoCompleteComponent } from "./autocomplete/moj-autocomplete.component";
import { MojDatePickerComponent } from "./datepicker/moj-datepicker.component";
import { MojDropdownListComponent } from "./dropdown/moj-dropdownlist.component";
import { MojMultiSelectComponent } from "./multiselect/moj-multiselect.component";
import { MojTextboxComponent } from "./textbox/moj-textbox.component";
import { ValidationsModule } from "../validations/validation.module";
import { MojSharedModule } from "../shared/moj.shared.module";
import { MojRadiobuttonComponent } from "./radiobutton/moj-radiobutton.component";
import { MojTextAreaComponent } from './text-area/text-area.component';
import { MojOnOffSwitchComponent } from './on-off-switch/moj-on-off-switch.component';
import { MojSliderComponent } from './moj-slider/moj-slider.component'
import { SliderModule } from 'primeng/slider';
import { TextMaskModule } from 'angular2-text-mask';
import { MojDirectiveModule } from "../directives/moj-directive.module";
import { RadioButtonsWrapperComponent } from "./radio-buttons-wrapper/radio-buttons-wrapper.component";
import { InputHelpTextComponent } from "./general/input-help-text/input-help-text.component";


@NgModule({
    imports: [CommonModule, FormsModule, AutoCompleteModule, CalendarModule, DropdownModule, MultiSelectModule, SliderModule,
        ValidationsModule, MojSharedModule, TranslateModule, TextMaskModule, MojDirectiveModule],
    exports: [MojCheckboxComponent, MojAutoCompleteComponent, MojDatePickerComponent, MojDropdownListComponent, MojTextAreaComponent,
        MojMultiSelectComponent, MojTextboxComponent, MojOnOffSwitchComponent, ValidationsModule, MojRadiobuttonComponent, FormsModule, MojSliderComponent, RadioButtonsWrapperComponent, InputHelpTextComponent],
    declarations: [MojCheckboxComponent, MojAutoCompleteComponent, MojDatePickerComponent, MojDropdownListComponent, MojRadiobuttonComponent,
        MojMultiSelectComponent, MojTextboxComponent, MojTextAreaComponent, MojOnOffSwitchComponent, MojSliderComponent, RadioButtonsWrapperComponent, InputHelpTextComponent]
})
export class MojInputModule { }