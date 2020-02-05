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
var moj_label_component_1 = require("./moj-label.component");
var moj_label_for_component_1 = require("./moj-label-for.component");
var label_before_content_component_1 = require("./label-before-content.component");
var moj_dynamic_label_component_1 = require("./moj-dynamic-label.component");
var core_2 = require("@ngx-translate/core");
;
var moj_title_component_1 = require("./moj-title/moj-title.component");
var MojLabelModule = /** @class */ (function () {
    function MojLabelModule() {
    }
    MojLabelModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, core_2.TranslateModule],
            exports: [moj_label_component_1.MojLabelComponent, moj_label_for_component_1.MojLabelForComponent, label_before_content_component_1.LabelForContentComponent, moj_dynamic_label_component_1.MojDynamicLabelComponent, moj_title_component_1.MojTitleComponent],
            declarations: [moj_label_component_1.MojLabelComponent, moj_label_for_component_1.MojLabelForComponent, label_before_content_component_1.LabelForContentComponent, moj_dynamic_label_component_1.MojDynamicLabelComponent, moj_title_component_1.MojTitleComponent]
        })
    ], MojLabelModule);
    return MojLabelModule;
}());
exports.MojLabelModule = MojLabelModule;
//# sourceMappingURL=moj-label.module.js.map