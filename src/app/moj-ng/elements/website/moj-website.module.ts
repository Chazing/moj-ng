import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";
import { MojPipesModule } from "../../pipes/moj-pipes-module";
import { MojDynamicFontsize } from './dynamic-font-size.directive';
import { MojRecaptchaComponent } from './moj-recaptcha/moj-recaptcha.component';
import { MojRecaptchaDirective } from './moj-recaptcha/moj-recaptcha.directive';
import { MojRecaptchaService } from "./moj-recaptcha/moj-recaptcha.service";
import { MojWebsiteHeaderComponent } from "./moj-website-header/moj-website-header.component";
import { MojWebsiteTopmenuComponent, MojWebsiteTopmenuMainItemComponent, MojWebsiteTopmenuSubItemComponent } from "./moj-website-topmenu/moj-website-topmenu.component";
import { MojTopMenuService } from "./moj-website-topmenu/moj-website-topmenu.service"
import { MojAccessibleMenuComponent } from "./moj-accessible-menu/moj-accessible-menu.component";
import { MojWebsiteFooterComponent } from "./moj-website-footer/moj-website-footer.component";
import { NgbDropdownMenu, NgbDropdownToggle, NgbDropdown, goBackToggle } from "../../directives/moj-dropdown.directive"
import { RouterModule } from "@angular/router";
import { StickyAlertComponent } from "../sticky-alert/sticky-alert.component";
import { MojWebsiteSupportContainerComponent } from "./moj-website-support-container/moj-website-support-container.component";
import { ValidationsModule } from "../../validations/validation.module";
import { MojLineModule } from "../general/moj-line.module";;
import { MojContainerComponent } from './moj-container/moj-container.component'

// import { MojFloatingPopupModule } from "../floating-popup/floating-popup.module";

@NgModule({
    imports: [CommonModule, TranslateModule, MojPipesModule, RouterModule, ValidationsModule,MojLineModule],
    exports: [MojAccessibleMenuComponent, MojWebsiteTopmenuComponent, MojWebsiteTopmenuMainItemComponent, MojWebsiteTopmenuSubItemComponent,
        MojWebsiteHeaderComponent, MojWebsiteFooterComponent, StickyAlertComponent, MojDynamicFontsize, MojRecaptchaComponent,MojWebsiteSupportContainerComponent, MojRecaptchaDirective,
        NgbDropdownMenu, NgbDropdownToggle, NgbDropdown, goBackToggle, MojContainerComponent
    ],
    declarations: [MojAccessibleMenuComponent, MojWebsiteTopmenuComponent, MojWebsiteTopmenuMainItemComponent, MojWebsiteTopmenuSubItemComponent,
        MojWebsiteHeaderComponent, MojWebsiteFooterComponent, StickyAlertComponent, MojDynamicFontsize, MojRecaptchaComponent,MojWebsiteSupportContainerComponent, MojRecaptchaDirective,
        NgbDropdownMenu, NgbDropdownToggle, NgbDropdown, goBackToggle
, MojContainerComponent
    ],
    providers: [MojTopMenuService]
})
export class MojWebsiteModule { }