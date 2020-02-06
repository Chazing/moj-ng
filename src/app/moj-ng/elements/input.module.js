"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var primeng_1 = require("primeng/primeng");
var moj_checkbox_component_1 = require("./checkbox/moj-checkbox.component");
var moj_autocomplete_component_1 = require("./autocomplete/moj-autocomplete.component");
var moj_datepicker_component_1 = require("./datepicker/moj-datepicker.component");
var moj_dropdownlist_component_1 = require("./dropdown/moj-dropdownlist.component");
var moj_multiselect_component_1 = require("./multiselect/moj-multiselect.component");
var moj_textbox_component_1 = require("./textbox/moj-textbox.component");
var validation_module_1 = require("../validations/validation.module");
var moj_shared_module_1 = require("../shared/moj.shared.module");
var moj_radiobutton_component_1 = require("./radiobutton/moj-radiobutton.component");
var text_area_component_1 = require("./text-area/text-area.component");
var moj_on_off_switch_component_1 = require("./on-off-switch/moj-on-off-switch.component");
var moj_slider_component_1 = require("./moj-slider/moj-slider.component");
var slider_1 = require("primeng/slider");
var angular2_text_mask_1 = require("angular2-text-mask");
var moj_directive_module_1 = require("../directives/moj-directive.module");
var radio_buttons_wrapper_component_1 = require("./radio-buttons-wrapper/radio-buttons-wrapper.component");
var input_help_text_component_1 = require("./general/input-help-text/input-help-text.component");
var MojInputModule = /** @class */ (function () {
    function MojInputModule() {
    }
    MojInputModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, primeng_1.AutoCompleteModule, primeng_1.CalendarModule, primeng_1.DropdownModule, primeng_1.MultiSelectModule, slider_1.SliderModule,
                validation_module_1.ValidationsModule, moj_shared_module_1.MojSharedModule, core_2.TranslateModule, angular2_text_mask_1.TextMaskModule, moj_directive_module_1.MojDirectiveModule],
            exports: [moj_checkbox_component_1.MojCheckboxComponent, moj_autocomplete_component_1.MojAutoCompleteComponent, moj_datepicker_component_1.MojDatePickerComponent, moj_dropdownlist_component_1.MojDropdownListComponent, text_area_component_1.MojTextAreaComponent,
                moj_multiselect_component_1.MojMultiSelectComponent, moj_textbox_component_1.MojTextboxComponent, moj_on_off_switch_component_1.MojOnOffSwitchComponent, validation_module_1.ValidationsModule, moj_radiobutton_component_1.MojRadiobuttonComponent, forms_1.FormsModule, moj_slider_component_1.MojSliderComponent, radio_buttons_wrapper_component_1.RadioButtonsWrapperComponent, input_help_text_component_1.InputHelpTextComponent],
            declarations: [moj_checkbox_component_1.MojCheckboxComponent, moj_autocomplete_component_1.MojAutoCompleteComponent, moj_datepicker_component_1.MojDatePickerComponent, moj_dropdownlist_component_1.MojDropdownListComponent, moj_radiobutton_component_1.MojRadiobuttonComponent,
                moj_multiselect_component_1.MojMultiSelectComponent, moj_textbox_component_1.MojTextboxComponent, text_area_component_1.MojTextAreaComponent, moj_on_off_switch_component_1.MojOnOffSwitchComponent, moj_slider_component_1.MojSliderComponent, radio_buttons_wrapper_component_1.RadioButtonsWrapperComponent, input_help_text_component_1.InputHelpTextComponent]
        })
    ], MojInputModule);
    return MojInputModule;
}());
exports.MojInputModule = MojInputModule;
//# sourceMappingURL=input.module.js.map