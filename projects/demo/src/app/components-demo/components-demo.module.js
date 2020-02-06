"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var demo_site_internal_module_1 = require("./../demo-site-internal/demo-site-internal.module");
var editor_demo_module_1 = require("./editor-demo/editor-demo.module");
var moj_grid_module_1 = require("./../../../../../src/app/moj-ng/elements/grid/moj-grid.module");
var moj_filter_module_1 = require("./../../../../../src/app/moj-ng/elements/filter/moj-filter.module");
var sliding_menu_module_1 = require("./../../../../../src/app/moj-ng/elements/sliding-menu/sliding-menu.module");
var moj_progress_module_1 = require("./../../../../../src/app/moj-ng/elements/moj-progress/moj-progress.module");
var moj_wizard_module_1 = require("./../../../../../src/app/moj-ng/elements/wizard/moj-wizard.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var autocomplete_demo_component_1 = require("./autocomplete-demo/autocomplete-demo.component");
var checkbox_demo_component_1 = require("./checkbox-demo/checkbox-demo.component");
var datepicker_demo_component_1 = require("./datepicker-demo/datepicker-demo.component");
var dropdown_demo_component_1 = require("./dropdown-demo/dropdown-demo.component");
var labels_demo_component_1 = require("./labels-demo/labels-demo.component");
//import { ButtonsDemoComponent } from './buttons-demo/buttons-demo.component';
var radiobutton_demo_component_1 = require("./radiobutton-demo/radiobutton-demo.component");
var text_area_demo_component_1 = require("./text-area-demo/text-area-demo.component");
var textbox_demo_component_1 = require("./textbox-demo/textbox-demo.component");
var moj_slider_demo_component_1 = require("./moj-slider-demo/moj-slider-demo.component");
var multiselect_demo_component_1 = require("./multiselect-demo/multiselect-demo.component");
var on_off_switch_demo_component_1 = require("./on-off-switch-demo/on-off-switch-demo.component");
//import { MojLoadingDemoComponent } from './moj-loading-demo/moj-loading-demo.component'
var moj_ng_1 = require("@moj/moj-ng");
var core_2 = require("@ngx-translate/core");
var primeng_1 = require("primeng/primeng");
var texts_demo_component_1 = require("./texts-demo/texts-demo.component");
var file_upload_demo_component_1 = require("./file-upload-demo/file-upload-demo.component");
var moj_ng_2 = require("@moj/moj-ng");
var editor_demo_component_1 = require("./editor-demo/editor-demo.component");
var filter_demo_component_1 = require("./filter-demo/filter-demo-component");
var ComponentsDemoModule = /** @class */ (function () {
    function ComponentsDemoModule() {
    }
    ComponentsDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                moj_ng_2.MojResizableModule,
                moj_ng_1.MojWebsiteModule,
                core_2.TranslateModule,
                primeng_1.TabViewModule,
                moj_ng_1.MojSharedModule,
                moj_ng_1.MojInputModule,
                moj_ng_2.MojFileUploadModule,
                moj_wizard_module_1.MojWizardModule,
                moj_progress_module_1.MojProgressModule,
                sliding_menu_module_1.MojSlidingMenuModule,
                moj_filter_module_1.MojFilterModule,
                moj_grid_module_1.MojGridModule,
                moj_ng_1.MojInputModule,
                editor_demo_module_1.EditorDemoModule,
                demo_site_internal_module_1.DemoSiteInternalModule,
                router_1.RouterModule.forChild([
                    { path: 'autocomplete-demo', component: autocomplete_demo_component_1.AutocompleteDemoComponent },
                    { path: 'checkbox-demo', component: checkbox_demo_component_1.CheckboxDemoComponent },
                    { path: 'moj-on-off-switch', component: on_off_switch_demo_component_1.OnOffSwitchDemoComponent },
                    { path: 'radiobutton-demo', component: radiobutton_demo_component_1.RadiobuttonDemoComponent },
                    { path: 'datepicker-demo', component: datepicker_demo_component_1.DatepickerDemoComponent },
                    { path: 'dropdown-demo', component: dropdown_demo_component_1.DropdownDemoComponent },
                    { path: 'labels-demo', component: labels_demo_component_1.LabelsDemoComponent },
                    { path: 'texts-demo', component: texts_demo_component_1.TextsDemoComponent },
                    { path: 'moj-slider-demo', component: moj_slider_demo_component_1.MojSliderDemoComponent },
                    { path: 'multiselect-demo', component: multiselect_demo_component_1.MultiselectDemoComponent },
                    { path: 'text-area-demo', component: text_area_demo_component_1.TextAreaDemoComponent },
                    { path: 'textbox-demo', component: textbox_demo_component_1.TextboxDemoComponent },
                    { path: 'filter-demo', component: filter_demo_component_1.FilterDemoComponent },
                    { path: 'fileupload-demo', component: file_upload_demo_component_1.FileUploadDemoComponent },
                    { path: 'editor-demo', component: editor_demo_component_1.EditorDemoComponent },
                ])
            ],
            exports: [],
            declarations: [autocomplete_demo_component_1.AutocompleteDemoComponent,
                checkbox_demo_component_1.CheckboxDemoComponent,
                datepicker_demo_component_1.DatepickerDemoComponent,
                dropdown_demo_component_1.DropdownDemoComponent,
                labels_demo_component_1.LabelsDemoComponent,
                radiobutton_demo_component_1.RadiobuttonDemoComponent,
                text_area_demo_component_1.TextAreaDemoComponent,
                textbox_demo_component_1.TextboxDemoComponent,
                moj_slider_demo_component_1.MojSliderDemoComponent,
                multiselect_demo_component_1.MultiselectDemoComponent,
                on_off_switch_demo_component_1.OnOffSwitchDemoComponent,
                texts_demo_component_1.TextsDemoComponent,
                file_upload_demo_component_1.FileUploadDemoComponent,
                filter_demo_component_1.FilterDemoComponent,
            ],
            providers: [],
        })
    ], ComponentsDemoModule);
    return ComponentsDemoModule;
}());
exports.ComponentsDemoModule = ComponentsDemoModule;
//# sourceMappingURL=components-demo.module.js.map