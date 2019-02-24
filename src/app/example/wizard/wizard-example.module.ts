import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { WizardExampleComponent } from "./wizard-example.component";
import { MojInputModule } from "../../moj-ng/elements/input.module";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { MojWizardModule } from "../../moj-ng/elements/wizard/moj-wizard.module";
import { MojAutoCompleteComponent } from "../../moj-ng/elements/autocomplete/moj-autocomplete.component";
import { AutocompleteExampleComponent } from "../autocomplete/autocomplete-example.component";
import { AutoCompleteExampleModule } from "../autocomplete/autocomplete-example.module";
import { MultiSelectExampleModule } from "../multiselect/multiselect-example.module";
import { MultiSelectExampleComponent } from "../multiselect/multiselect-example.component";
import { FormExampleComponent } from "../form-example/form-example.component";


@NgModule({
    imports: [
        CommonModule, FormsModule, MojWizardModule, MojInputModule, MojSharedModule, AutoCompleteExampleModule, MultiSelectExampleModule
    ],
    exports: [WizardExampleComponent, FormsModule],
    declarations: [
        WizardExampleComponent
    ],
    entryComponents: [AutocompleteExampleComponent, MultiSelectExampleComponent, FormExampleComponent]
})
export class WizardExampleModule { }