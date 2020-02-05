"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dynamic_form_component_1 = require("./dynamic-form.component");
var dynamic_field_directive_1 = require("./dynamic-field.directive");
var dynamic_components_1 = require("./dynamic-components");
var moj_shared_module_1 = require("../../shared/moj.shared.module");
var input_module_1 = require("../input.module");
var MojDynamicFormModule = /** @class */ (function () {
    function MojDynamicFormModule() {
    }
    MojDynamicFormModule = __decorate([
        core_1.NgModule({
            declarations: [dynamic_form_component_1.MojDynamicFormComponent,
                dynamic_field_directive_1.MojDynamicFieldDirective,
                dynamic_components_1.MojDynamicLabelForComponent,
                dynamic_components_1.MojDynamicTextboxComponent,
                dynamic_components_1.MojDynamicTextAreaComponent,
                dynamic_components_1.MojDynamicDropdownComponent,
                dynamic_components_1.MojDynamicAutoCompleteComponent,
                dynamic_components_1.MojDynamicDatePickerComponent,
                dynamic_components_1.MojDynamicMultiSelectComponent,
                dynamic_components_1.MojDynamicCheckboxComponent],
            imports: [forms_1.ReactiveFormsModule,
                moj_shared_module_1.MojSharedModule,
                input_module_1.MojInputModule],
            exports: [dynamic_form_component_1.MojDynamicFormComponent],
            entryComponents: [
                dynamic_components_1.MojDynamicLabelForComponent,
                dynamic_components_1.MojDynamicTextboxComponent,
                dynamic_components_1.MojDynamicTextAreaComponent,
                dynamic_components_1.MojDynamicDropdownComponent,
                dynamic_components_1.MojDynamicAutoCompleteComponent,
                dynamic_components_1.MojDynamicMultiSelectComponent,
                dynamic_components_1.MojDynamicDatePickerComponent,
                dynamic_components_1.MojDynamicCheckboxComponent
            ]
        })
    ], MojDynamicFormModule);
    return MojDynamicFormModule;
}());
exports.MojDynamicFormModule = MojDynamicFormModule;
//# sourceMappingURL=dynamic-form.module.js.map