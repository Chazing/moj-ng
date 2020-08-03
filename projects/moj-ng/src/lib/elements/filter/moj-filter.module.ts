import { NgModule } from "@angular/core";
import { MojFilterComponent } from "./moj-filter.component";
import { CommonModule, AsyncPipe } from "@angular/common";
import { MojTreeFilterComponent } from "./moj-tree-filter/moj-tree-filter.component";
import { MojDynamicFormModule } from "../dynamic-form/dynamic-form.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MojResizableModule } from "../../directives/moj-resizable/moj-resizable-module";
import { MojInputModule } from "../input.module";
import { MojLabelModule } from "../label/moj-label.module";

import { MojLineModule } from "../general/moj-line.module";
import { MojPipesModule } from "../../pipes/moj-pipes-module";
import { TranslateModule } from "@ngx-translate/core";
import { MojFilterService } from './moj-filter.service';

@NgModule ({
    imports: [CommonModule, ReactiveFormsModule, MojDynamicFormModule
        , MojResizableModule,MojInputModule,MojLabelModule,MojLineModule,MojPipesModule,TranslateModule],
    declarations: [MojFilterComponent, MojTreeFilterComponent],
    exports: [MojFilterComponent, MojTreeFilterComponent],
    providers: [MojFilterService]
})
export class MojFilterModule {

    
}