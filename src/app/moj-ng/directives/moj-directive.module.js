"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var provide_parent_form_directive_1 = require("./provide-parent-form.directive");
var moj_dropdown_directive_1 = require("./moj-dropdown.directive");
var moj_form_directive_1 = require("./moj-form.directive");
var moj_only_number_directive_1 = require("./moj-only-number.directive");
var moj_drag_and_drop_1 = require("./moj-drag-and-drop");
var moj_direction_directive_1 = require("./moj-direction.directive");
var MojDirectiveModule = /** @class */ (function () {
    function MojDirectiveModule() {
    }
    MojDirectiveModule = __decorate([
        core_1.NgModule({
            exports: [provide_parent_form_directive_1.ProvideParentForm, moj_form_directive_1.MojFormDirective, moj_only_number_directive_1.MojOnlyNumberDirective, moj_drag_and_drop_1.MojDragAndDropDirective, moj_direction_directive_1.MojDirectionDirective],
            declarations: [provide_parent_form_directive_1.ProvideParentForm, moj_dropdown_directive_1.NgbDropdownAnchor, moj_form_directive_1.MojFormDirective, moj_only_number_directive_1.MojOnlyNumberDirective, moj_drag_and_drop_1.MojDragAndDropDirective, moj_direction_directive_1.MojDirectionDirective]
        })
    ], MojDirectiveModule);
    return MojDirectiveModule;
}());
exports.MojDirectiveModule = MojDirectiveModule;
//# sourceMappingURL=moj-directive.module.js.map