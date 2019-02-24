import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/primeng";
import { TranslateModule } from "@ngx-translate/core";

import { DialogWrapperComponent } from "./dialog-wrapper.component";
import { MojMessageComponent } from "./moj-message.component";
import { DialogHostDirective } from "./dialog-host.directive";
import { MojDialogService } from "./moj-dialog.service";
import { MojMessagesService } from "./moj-messages.service";
import { MojBottonModule } from "../elements/buttons/moj-button.module";
import { MojLineModule } from "../elements/general/moj-line.module";


@NgModule({
    imports: [CommonModule, FormsModule, DialogModule, MojBottonModule, MojLineModule, TranslateModule],
    exports: [DialogWrapperComponent, MojMessageComponent, DialogHostDirective, DialogModule],
    entryComponents: [MojMessageComponent, DialogWrapperComponent],
    declarations: [DialogWrapperComponent, MojMessageComponent, DialogHostDirective],
    providers: [MojMessagesService, MojDialogService]
})
export class MojDialogModule { }