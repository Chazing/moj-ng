"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var floating_popup_component_1 = require("./floating-popup.component");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var moj_shared_module_1 = require("../../shared/moj.shared.module");
var __1 = require("../..");
var MojFloatingPopupModule = (function () {
    function MojFloatingPopupModule() {
    }
    return MojFloatingPopupModule;
}());
MojFloatingPopupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, core_2.TranslateModule, moj_shared_module_1.MojSharedModule, __1.MojDirectiveModule],
        exports: [floating_popup_component_1.FloatingPopupComponent],
        declarations: [floating_popup_component_1.FloatingPopupComponent]
    })
], MojFloatingPopupModule);
exports.MojFloatingPopupModule = MojFloatingPopupModule;
//# sourceMappingURL=floating-popup.module.js.map