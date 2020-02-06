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
var core_2 = require("@ngx-translate/core");
var moj_wizard_component_1 = require("./moj-wizard.component");
var wizard_item_component_1 = require("./wizard-item/wizard-item.component");
var moj_button_module_1 = require("../buttons/moj-button.module");
var moj_website_module_1 = require("../website/moj-website.module");
;
var wizard_buttons_component_1 = require("./wizard-buttons/wizard-buttons.component");
var wizard_aside_component_1 = require("./wizard-aside/wizard-aside.component");
var MojWizardModule = /** @class */ (function () {
    function MojWizardModule() {
    }
    MojWizardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule, moj_button_module_1.MojBottonModule, moj_website_module_1.MojWebsiteModule],
            exports: [moj_wizard_component_1.MojWizardComponent, wizard_item_component_1.WizardItemComponent, wizard_buttons_component_1.WizardButtonsComponent, wizard_aside_component_1.WizardAsideComponent],
            declarations: [moj_wizard_component_1.MojWizardComponent, wizard_item_component_1.WizardItemComponent, wizard_buttons_component_1.WizardButtonsComponent, wizard_aside_component_1.WizardAsideComponent]
        })
    ], MojWizardModule);
    return MojWizardModule;
}());
exports.MojWizardModule = MojWizardModule;
//# sourceMappingURL=moj-wizard.module.js.map