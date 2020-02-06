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
var moj_pipes_module_1 = require("../../pipes/moj-pipes-module");
var dynamic_font_size_directive_1 = require("./dynamic-font-size.directive");
var moj_recaptcha_component_1 = require("./moj-recaptcha/moj-recaptcha.component");
var moj_recaptcha_directive_1 = require("./moj-recaptcha/moj-recaptcha.directive");
var moj_website_header_component_1 = require("./moj-website-header/moj-website-header.component");
var moj_website_topmenu_component_1 = require("./moj-website-topmenu/moj-website-topmenu.component");
var moj_website_topmenu_service_1 = require("./moj-website-topmenu/moj-website-topmenu.service");
var moj_accessible_menu_component_1 = require("./moj-accessible-menu/moj-accessible-menu.component");
var moj_website_footer_component_1 = require("./moj-website-footer/moj-website-footer.component");
var moj_dropdown_directive_1 = require("../../directives/moj-dropdown.directive");
var router_1 = require("@angular/router");
var sticky_alert_component_1 = require("../sticky-alert/sticky-alert.component");
var moj_website_support_container_component_1 = require("./moj-website-support-container/moj-website-support-container.component");
var validation_module_1 = require("../../validations/validation.module");
var moj_line_module_1 = require("../general/moj-line.module");
;
var moj_container_component_1 = require("./moj-container/moj-container.component");
// import { MojFloatingPopupModule } from "../floating-popup/floating-popup.module";
var MojWebsiteModule = /** @class */ (function () {
    function MojWebsiteModule() {
    }
    MojWebsiteModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule, moj_pipes_module_1.MojPipesModule, router_1.RouterModule, validation_module_1.ValidationsModule, moj_line_module_1.MojLineModule],
            exports: [moj_accessible_menu_component_1.MojAccessibleMenuComponent, moj_website_topmenu_component_1.MojWebsiteTopmenuComponent, moj_website_topmenu_component_1.MojWebsiteTopmenuMainItemComponent, moj_website_topmenu_component_1.MojWebsiteTopmenuSubItemComponent,
                moj_website_header_component_1.MojWebsiteHeaderComponent, moj_website_footer_component_1.MojWebsiteFooterComponent, sticky_alert_component_1.StickyAlertComponent, dynamic_font_size_directive_1.MojDynamicFontsize, moj_recaptcha_component_1.MojRecaptchaComponent, moj_website_support_container_component_1.MojWebsiteSupportContainerComponent, moj_recaptcha_directive_1.MojRecaptchaDirective,
                moj_dropdown_directive_1.NgbDropdownMenu, moj_dropdown_directive_1.NgbDropdownToggle, moj_dropdown_directive_1.NgbDropdown, moj_dropdown_directive_1.goBackToggle, moj_container_component_1.MojContainerComponent
            ],
            declarations: [moj_accessible_menu_component_1.MojAccessibleMenuComponent, moj_website_topmenu_component_1.MojWebsiteTopmenuComponent, moj_website_topmenu_component_1.MojWebsiteTopmenuMainItemComponent, moj_website_topmenu_component_1.MojWebsiteTopmenuSubItemComponent,
                moj_website_header_component_1.MojWebsiteHeaderComponent, moj_website_footer_component_1.MojWebsiteFooterComponent, sticky_alert_component_1.StickyAlertComponent, dynamic_font_size_directive_1.MojDynamicFontsize, moj_recaptcha_component_1.MojRecaptchaComponent, moj_website_support_container_component_1.MojWebsiteSupportContainerComponent, moj_recaptcha_directive_1.MojRecaptchaDirective,
                moj_dropdown_directive_1.NgbDropdownMenu, moj_dropdown_directive_1.NgbDropdownToggle, moj_dropdown_directive_1.NgbDropdown, moj_dropdown_directive_1.goBackToggle,
                moj_container_component_1.MojContainerComponent
            ],
            providers: [moj_website_topmenu_service_1.MojTopMenuService]
        })
    ], MojWebsiteModule);
    return MojWebsiteModule;
}());
exports.MojWebsiteModule = MojWebsiteModule;
//# sourceMappingURL=moj-website.module.js.map