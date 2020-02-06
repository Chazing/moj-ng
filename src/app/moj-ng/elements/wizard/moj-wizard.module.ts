import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { MojWizardComponent } from "./moj-wizard.component";
import { WizardItemComponent } from "./wizard-item/wizard-item.component";
import { MojBottonModule } from "../buttons/moj-button.module"
import { MojWebsiteModule } from "../website/moj-website.module";;
import { WizardButtonsComponent } from './wizard-buttons/wizard-buttons.component';
import { WizardAsideComponent } from './wizard-aside/wizard-aside.component'

@NgModule({
    imports: [CommonModule, TranslateModule, MojBottonModule, MojWebsiteModule],
    exports: [MojWizardComponent, WizardItemComponent, WizardButtonsComponent, WizardAsideComponent],
    declarations: [MojWizardComponent, WizardItemComponent, WizardButtonsComponent, WizardAsideComponent]
})
export class MojWizardModule { }