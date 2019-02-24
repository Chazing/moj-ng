import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MojLabelComponent } from "./moj-label.component";
import { MojLabelForComponent } from "./moj-label-for.component";
import { LabelBeforContentComponent } from "./label-before-content.component";
import { MojDynamicLabelComponent } from "./moj-dynamic-label.component"

import { TranslateModule } from "@ngx-translate/core";


@NgModule({
    imports: [CommonModule, FormsModule, TranslateModule],
    exports: [MojLabelComponent, MojLabelForComponent, LabelBeforContentComponent, MojDynamicLabelComponent],
    declarations: [MojLabelComponent, MojLabelForComponent, LabelBeforContentComponent, MojDynamicLabelComponent]
})
export class MojLabelModule { }