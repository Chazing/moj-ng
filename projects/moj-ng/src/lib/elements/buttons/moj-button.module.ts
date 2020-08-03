import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MojButtonComponent } from "./moj-button.component";
import { MojClearButtonComponent } from "./moj-clear-button.component";
import { MojCancelButtonComponent } from "./moj-cancel-button.component";
import { MojSubmitButtonComponent } from "./moj-submit-button.component";
import { MojButtonToggleComponent } from "./button-toggle/moj-button-toggle.component";
import { ValidationsModule } from "../../validations/validation.module";
import { MojEllipsisButtonComponent } from './ellipsis-button/moj-ellipsis-button.component';
import { MenuModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, TranslateModule, ValidationsModule, MenuModule],
    exports: [MojButtonComponent, MojClearButtonComponent, MojCancelButtonComponent, MojSubmitButtonComponent, MojButtonToggleComponent, MojEllipsisButtonComponent],
    declarations: [MojButtonComponent, MojClearButtonComponent, MojCancelButtonComponent, MojSubmitButtonComponent, MojButtonToggleComponent, MojEllipsisButtonComponent]
})
export class MojBottonModule { }