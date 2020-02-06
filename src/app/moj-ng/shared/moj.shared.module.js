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
var http_1 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var logging_service_1 = require("../error-handling/logging.service");
var moj_button_module_1 = require("../elements/buttons/moj-button.module");
var moj_line_module_1 = require("../elements/general/moj-line.module");
var moj_label_module_1 = require("../elements/label/moj-label.module");
var moj_dialog_module_1 = require("../messages/moj-dialog.module");
var moj_directive_module_1 = require("../directives/moj-directive.module");
var internal_grid_service_1 = require("../elements/grid/service/internal-grid.service");
var moj_loading_module_1 = require("../elements/moj-loading/moj-loading.module");
var moj_http_interceptor_1 = require("./moj-http-interceptor");
var moj_config_service_1 = require("./moj-config.service");
var moj_csrf_service_1 = require("./moj-csrf.service");
var moj_fieldset_module_1 = require("../elements/fieldset/moj-fieldset.module");
var panels_module_1 = require("../elements/panels/panels.module");
var MojSharedModule = /** @class */ (function () {
    function MojSharedModule() {
    }
    MojSharedModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                core_2.TranslateModule,
                moj_button_module_1.MojBottonModule,
                moj_line_module_1.MojLineModule,
                moj_label_module_1.MojLabelModule,
                moj_dialog_module_1.MojDialogModule,
                moj_directive_module_1.MojDirectiveModule,
                moj_loading_module_1.MojLoadingModule,
                moj_fieldset_module_1.MojFieldsetModule
            ],
            declarations: [],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                panels_module_1.PanelsModule,
                moj_loading_module_1.MojLoadingModule,
                moj_button_module_1.MojBottonModule,
                moj_line_module_1.MojLineModule,
                moj_label_module_1.MojLabelModule,
                moj_dialog_module_1.MojDialogModule,
                moj_directive_module_1.MojDirectiveModule,
                moj_fieldset_module_1.MojFieldsetModule
            ],
            providers: [
                logging_service_1.LoggingService,
                internal_grid_service_1.InternalGridService,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: moj_http_interceptor_1.MojHttpInterceptor, deps: [moj_csrf_service_1.CSRFService, moj_config_service_1.MojConfigService], multi: true }
            ]
        })
    ], MojSharedModule);
    return MojSharedModule;
}());
exports.MojSharedModule = MojSharedModule;
//# sourceMappingURL=moj.shared.module.js.map