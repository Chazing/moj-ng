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
var ng2_validation_1 = require("ng2-validation");
var validation_messages_component_1 = require("./validation-messages.component");
var hexadecimal_directive_1 = require("./customValidators/hexadecimal.directive");
var equal_to_directive_1 = require("./customValidators/equal_to.directive");
var idetntification_directive_1 = require("./customValidators/idetntification.directive");
var security_directive_1 = require("./customValidators/security.directive");
var greater_than_directive_1 = require("./customValidators/greater_than.directive");
var moj_pipes_module_1 = require("../pipes/moj-pipes-module");
var moj_shared_module_1 = require("../shared/moj.shared.module");
var security_note_directive_1 = require("./customValidators/security-note.directive");
var greater_or_equal_than_directive_1 = require("./customValidators/greater_or_equal_than.directive");
var ValidationsModule = /** @class */ (function () {
    function ValidationsModule() {
    }
    ValidationsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, ng2_validation_1.CustomFormsModule, core_2.TranslateModule, moj_pipes_module_1.MojPipesModule, moj_shared_module_1.MojSharedModule
            ],
            exports: [
                validation_messages_component_1.ValidationMessages, hexadecimal_directive_1.HexadecimalValueValidator, equal_to_directive_1.EqualToValidator, idetntification_directive_1.IdentificationValidator,
                security_directive_1.SecurityValidator, security_note_directive_1.SecurityNoteValidator, greater_than_directive_1.GreaterThanValidator, ng2_validation_1.CustomFormsModule, moj_pipes_module_1.MojPipesModule, greater_or_equal_than_directive_1.GreaterOrEqualThanValidator
            ],
            declarations: [
                validation_messages_component_1.ValidationMessages, hexadecimal_directive_1.HexadecimalValueValidator, equal_to_directive_1.EqualToValidator, idetntification_directive_1.IdentificationValidator, security_note_directive_1.SecurityNoteValidator,
                security_directive_1.SecurityValidator, greater_than_directive_1.GreaterThanValidator, greater_or_equal_than_directive_1.GreaterOrEqualThanValidator
            ]
        })
    ], ValidationsModule);
    return ValidationsModule;
}());
exports.ValidationsModule = ValidationsModule;
//# sourceMappingURL=validation.module.js.map