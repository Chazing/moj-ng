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
var wizard_example_component_1 = require("./wizard-example.component");
var input_module_1 = require("../../moj-ng/elements/input.module");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var moj_wizard_module_1 = require("../../moj-ng/elements/wizard/moj-wizard.module");
var autocomplete_example_component_1 = require("../autocomplete/autocomplete-example.component");
var autocomplete_example_module_1 = require("../autocomplete/autocomplete-example.module");
var multiselect_example_module_1 = require("../multiselect/multiselect-example.module");
var multiselect_example_component_1 = require("../multiselect/multiselect-example.component");
var form_example_component_1 = require("../form-example/form-example.component");
var WizardExampleModule = /** @class */ (function () {
    function WizardExampleModule() {
    }
    WizardExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, moj_wizard_module_1.MojWizardModule, input_module_1.MojInputModule, moj_shared_module_1.MojSharedModule, autocomplete_example_module_1.AutoCompleteExampleModule, multiselect_example_module_1.MultiSelectExampleModule
            ],
            exports: [wizard_example_component_1.WizardExampleComponent, forms_1.FormsModule],
            declarations: [
                wizard_example_component_1.WizardExampleComponent
            ],
            entryComponents: [autocomplete_example_component_1.AutocompleteExampleComponent, multiselect_example_component_1.MultiSelectExampleComponent, form_example_component_1.FormExampleComponent]
        })
    ], WizardExampleModule);
    return WizardExampleModule;
}());
exports.WizardExampleModule = WizardExampleModule;
//# sourceMappingURL=wizard-example.module.js.map