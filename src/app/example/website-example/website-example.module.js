"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var moj_progress_module_1 = require("./../../moj-ng/elements/moj-progress/moj-progress.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var website_example_routing_module_1 = require("./website-example-routing.module");
var moj_website_module_1 = require("../../moj-ng/elements/website/moj-website.module");
var autocomplete_example_module_1 = require("../autocomplete/autocomplete-example.module");
var multiselect_example_module_1 = require("../multiselect/multiselect-example.module");
var grid_example_module_1 = require("../grid-example/grid-example.module");
var wizard_example_module_1 = require("../wizard/wizard-example.module");
var form_example_module_1 = require("../form-example/form-example.module");
var website_example_component_1 = require("./website-example.component");
var datepicker_example_component_1 = require("../datepicker-example/datepicker-example.component");
var input_module_1 = require("../../moj-ng/elements/input.module");
var moj_shared_module_1 = require("../../moj-ng/shared/moj.shared.module");
var recaptcha_example_module_1 = require("../recaptcha-example/recaptcha-example.module");
var file_upload_example_module_1 = require("../file-upload-example/file-upload-example.module");
var buttons_example_module_1 = require("../buttons/buttons-example.module");
var editor_example_module_1 = require("../editor/editor-example.module");
var content_with_tabs_module_1 = require("./content-with-tabs/content-with-tabs.module");
var store_service_1 = require("../common/services/store.service");
var grid_example_guard_1 = require("../common/guards/grid-example-guard");
var dynamic_form_example_module_1 = require("../dynamic-form/dynamic-form-example.module");
var core_2 = require("@ngx-translate/core");
var moj_ng_1 = require("../../moj-ng");
var moj_filter_module_1 = require("../../moj-ng/elements/filter/moj-filter.module");
var dialog_example_component_1 = require("../dialog-example/dialog-example.component");
var WebsiteExampleModule = /** @class */ (function () {
    function WebsiteExampleModule() {
    }
    WebsiteExampleModule = __decorate([
        core_1.NgModule({
            imports: [
                core_2.TranslateModule,
                common_1.CommonModule,
                website_example_routing_module_1.WebsiteRoutingModule,
                moj_website_module_1.MojWebsiteModule,
                autocomplete_example_module_1.AutoCompleteExampleModule,
                multiselect_example_module_1.MultiSelectExampleModule,
                grid_example_module_1.GridExampleModule,
                wizard_example_module_1.WizardExampleModule,
                form_example_module_1.FormExampleModule, moj_shared_module_1.MojSharedModule, input_module_1.MojInputModule, recaptcha_example_module_1.RecaptchaExampleModule,
                file_upload_example_module_1.FileUploadExampleModule,
                buttons_example_module_1.ButtonsExampleModule,
                editor_example_module_1.EditorExampleModule,
                content_with_tabs_module_1.ContentWithTabsModule,
                dynamic_form_example_module_1.DynamicFormExampleModule,
                moj_progress_module_1.MojProgressModule,
                moj_ng_1.MojSlidingMenuModule,
                moj_filter_module_1.MojFilterModule,
                moj_ng_1.MojFloatingPopupModule
            ],
            exports: [website_example_component_1.WebsiteExampleComponent],
            declarations: [
                website_example_component_1.WebsiteExampleComponent,
                datepicker_example_component_1.DatepickerExampleComponent,
                dialog_example_component_1.DialogExampleComponent
            ],
            providers: [store_service_1.StoreService, grid_example_guard_1.GridExampleGuard]
        })
    ], WebsiteExampleModule);
    return WebsiteExampleModule;
}());
exports.WebsiteExampleModule = WebsiteExampleModule;
//# sourceMappingURL=website-example.module.js.map