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
var moj_button_component_1 = require("./moj-button.component");
var moj_clear_button_component_1 = require("./moj-clear-button.component");
var moj_cancel_button_component_1 = require("./moj-cancel-button.component");
var moj_submit_button_component_1 = require("./moj-submit-button.component");
var moj_button_toggle_component_1 = require("./button-toggle/moj-button-toggle.component");
var validation_module_1 = require("../../validations/validation.module");
var MojBottonModule = /** @class */ (function () {
    function MojBottonModule() {
    }
    MojBottonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule, validation_module_1.ValidationsModule],
            exports: [moj_button_component_1.MojButtonComponent, moj_clear_button_component_1.MojClearButtonComponent, moj_cancel_button_component_1.MojCancelButtonComponent, moj_submit_button_component_1.MojSubmitButtonComponent, moj_button_toggle_component_1.MojButtonToggleComponent],
            declarations: [moj_button_component_1.MojButtonComponent, moj_clear_button_component_1.MojClearButtonComponent, moj_cancel_button_component_1.MojCancelButtonComponent, moj_submit_button_component_1.MojSubmitButtonComponent, moj_button_toggle_component_1.MojButtonToggleComponent]
        })
    ], MojBottonModule);
    return MojBottonModule;
}());
exports.MojBottonModule = MojBottonModule;
//# sourceMappingURL=moj-button.module.js.map