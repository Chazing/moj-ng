import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { MojWizardComponent } from "./moj-wizard.component";
import { WizardItemComponent } from "./wizard-item/wizard-item.component";

@NgModule({
    imports: [CommonModule, TranslateModule],
    exports: [MojWizardComponent, WizardItemComponent],
    declarations: [MojWizardComponent, WizardItemComponent]
})
export class MojWizardModule { }