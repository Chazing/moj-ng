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
var input_module_1 = require("../../moj-ng/elements/input.module");
var autocomplete_example_component_1 = require("./autocomplete-example.component");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var moj_grid_module_1 = require("../../moj-ng/elements/grid/moj-grid.module");
var primeng_1 = require("primeng/primeng");
var core_2 = require("@ngx-translate/core");
var AutoCompleteExampleModule = /** @class */ (function () {
    function AutoCompleteExampleModule() {
    }
    AutoCompleteExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                input_module_1.MojInputModule, moj_shared_module_1.MojSharedModule, moj_grid_module_1.MojGridModule, primeng_1.AutoCompleteModule,
                primeng_1.TabViewModule, core_2.TranslateModule,
            ],
            exports: [autocomplete_example_component_1.AutocompleteExampleComponent],
            declarations: [
                autocomplete_example_component_1.AutocompleteExampleComponent
            ]
        })
    ], AutoCompleteExampleModule);
    return AutoCompleteExampleModule;
}());
exports.AutoCompleteExampleModule = AutoCompleteExampleModule;
//# sourceMappingURL=autocomplete-example.module.js.map