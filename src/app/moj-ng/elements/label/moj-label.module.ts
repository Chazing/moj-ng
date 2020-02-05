import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MojLabelComponent } from "./moj-label.component";
import { MojLabelForComponent } from "./moj-label-for.component";
import { LabelForContentComponent } from "./label-before-content.component";
import { MojDynamicLabelComponent } from "./moj-dynamic-label.component"

import { TranslateModule } from "@ngx-translate/core";;
import { MojTitleComponent } from './moj-title/moj-title.component'


@NgModule({
    imports: [CommonModule, FormsModule, TranslateModule],
    exports: [MojLabelComponent, MojLabelForComponent, LabelForContentComponent, MojDynamicLabelComponent, MojTitleComponent],
    declarations: [MojLabelComponent, MojLabelForComponent, LabelForContentComponent, MojDynamicLabelComponent, MojTitleComponent]
})
export class MojLabelModule { }