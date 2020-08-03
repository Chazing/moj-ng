import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AutocompleteExampleComponent } from "./autocomplete-example.component";
import { TabViewModule, AutoCompleteModule } from "primeng/primeng";
import { TranslateModule } from "@ngx-translate/core";
import { MojSharedModule, MojGridModule, MojInputModule } from '@moj/moj-ng';

@NgModule({
    imports: [
        CommonModule,
        MojInputModule, MojSharedModule, MojGridModule, AutoCompleteModule,
        TabViewModule, TranslateModule,
    ],
    exports: [AutocompleteExampleComponent],
    declarations: [
        AutocompleteExampleComponent
    ]
})
export class AutoCompleteExampleModule { }
