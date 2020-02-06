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
var primeng_1 = require("primeng/primeng");
var core_2 = require("@ngx-translate/core");
var dialog_wrapper_component_1 = require("./dialog-wrapper.component");
var moj_message_component_1 = require("./moj-message.component");
var dialog_host_directive_1 = require("./dialog-host.directive");
var moj_dialog_service_1 = require("./moj-dialog.service");
var moj_messages_service_1 = require("./moj-messages.service");
var moj_button_module_1 = require("../elements/buttons/moj-button.module");
var moj_line_module_1 = require("../elements/general/moj-line.module");
var MojDialogModule = /** @class */ (function () {
    function MojDialogModule() {
    }
    MojDialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, primeng_1.DialogModule, moj_button_module_1.MojBottonModule, moj_line_module_1.MojLineModule, core_2.TranslateModule],
            exports: [dialog_wrapper_component_1.DialogWrapperComponent, moj_message_component_1.MojMessageComponent, dialog_host_directive_1.DialogHostDirective, primeng_1.DialogModule],
            entryComponents: [moj_message_component_1.MojMessageComponent, dialog_wrapper_component_1.DialogWrapperComponent],
            declarations: [dialog_wrapper_component_1.DialogWrapperComponent, moj_message_component_1.MojMessageComponent, dialog_host_directive_1.DialogHostDirective],
            providers: [moj_messages_service_1.MojMessagesService, moj_dialog_service_1.MojDialogService]
        })
    ], MojDialogModule);
    return MojDialogModule;
}());
exports.MojDialogModule = MojDialogModule;
//# sourceMappingURL=moj-dialog.module.js.map