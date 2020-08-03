import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { WizardExampleComponent } from "./wizard-example.component";
import { AutocompleteExampleComponent } from "../autocomplete/autocomplete-example.component";
import { AutoCompleteExampleModule } from "../autocomplete/autocomplete-example.module";
import { MultiSelectExampleModule } from "../multiselect/multiselect-example.module";
import { MultiSelectExampleComponent } from "../multiselect/multiselect-example.component";
import { FormExampleComponent } from "../form-example/form-example.component";
import { MojSharedModule, MojInputModule, MojWizardModule } from '@moj/moj-ng';
import { MojGuidelinesModule } from 'projects/moj-ng';


@NgModule({
    imports: [
        CommonModule, FormsModule, MojWizardModule, MojInputModule, MojSharedModule, AutoCompleteExampleModule, MultiSelectExampleModule, MojGuidelinesModule
    ],
    exports: [WizardExampleComponent, FormsModule],
    declarations: [
        WizardExampleComponent
    ],
    entryComponents: [AutocompleteExampleComponent, MultiSelectExampleComponent, FormExampleComponent]
})
export class WizardExampleModule { }