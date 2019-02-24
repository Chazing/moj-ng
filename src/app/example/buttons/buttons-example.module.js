"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var buttons_example_component_1 = require("./buttons-example.component");
var moj_button_module_1 = require("../../moj-ng/elements/buttons/moj-button.module");
var common_1 = require("@angular/common");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var ButtonsExampleModule = /** @class */ (function () {
    function ButtonsExampleModule() {
    }
    ButtonsExampleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                moj_shared_module_1.MojSharedModule,
                moj_button_module_1.MojBottonModule
            ],
            exports: [buttons_example_component_1.ButtonsExampleComponent],
            declarations: [
                buttons_example_component_1.ButtonsExampleComponent
            ]
        })
    ], ButtonsExampleModule);
    return ButtonsExampleModule;
}());
exports.ButtonsExampleModule = ButtonsExampleModule;
//# sourceMappingURL=buttons-example.module.js.map