import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MojButtonComponent } from "./moj-button.component";
import { MojClearButtonComponent } from "./moj-clear-button.component";
import { MojCancelButtonComponent } from "./moj-cancel-button.component";
import { MojSubmitButtonComponent } from "./moj-submit-button.component";
import { MojButtonToggleComponent } from "./button-toggle/moj-button-toggle.component";

@NgModule({
    imports: [CommonModule, TranslateModule],
    exports: [MojButtonComponent, MojClearButtonComponent, MojCancelButtonComponent, MojSubmitButtonComponent, MojButtonToggleComponent],
    declarations: [MojButtonComponent, MojClearButtonComponent, MojCancelButtonComponent, MojSubmitButtonComponent, MojButtonToggleComponent]
})
export class MojBottonModule { }