import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MojInputModule } from "../../moj-ng/elements/input.module";
import { AutocompleteExampleComponent } from "./autocomplete-example.component";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { MojGridModule } from "../../moj-ng/elements/grid/moj-grid.module";
import { TabViewModule } from "primeng/primeng";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        MojInputModule, MojSharedModule, MojGridModule,
        TabViewModule, TranslateModule,
    ],
    exports: [AutocompleteExampleComponent],
    declarations: [
        AutocompleteExampleComponent
    ]
})
export class AutoCompleteExampleModule { }
