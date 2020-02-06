"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moj_filter_component_1 = require("./moj-filter.component");
var common_1 = require("@angular/common");
var moj_tree_filter_component_1 = require("./moj-tree-filter/moj-tree-filter.component");
var dynamic_form_module_1 = require("../dynamic-form/dynamic-form.module");
var forms_1 = require("@angular/forms");
var moj_resizable_module_1 = require("../../directives/moj-resizable/moj-resizable-module");
var input_module_1 = require("../input.module");
var MojFilterModule = /** @class */ (function () {
    function MojFilterModule() {
    }
    MojFilterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, dynamic_form_module_1.MojDynamicFormModule, moj_resizable_module_1.MojResizableModule, input_module_1.MojInputModule],
            declarations: [moj_filter_component_1.MojFilterComponent, moj_tree_filter_component_1.MojTreeFilterComponent],
            exports: [moj_filter_component_1.MojFilterComponent, moj_tree_filter_component_1.MojTreeFilterComponent]
        })
    ], MojFilterModule);
    return MojFilterModule;
}());
exports.MojFilterModule = MojFilterModule;
//# sourceMappingURL=moj-filter.module.js.map