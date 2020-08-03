import { MojSnackbarComponent } from './../elements/moj-snackbar/moj-snackbar.component';
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
import { MojNotificationComponent } from '../elements/notification/moj-notification.component';


@NgModule({
    imports: [CommonModule, FormsModule, DialogModule, MojBottonModule, MojLineModule, TranslateModule],
    exports: [DialogWrapperComponent, MojMessageComponent, DialogHostDirective, DialogModule, MojSnackbarComponent, MojNotificationComponent],
    entryComponents: [MojMessageComponent, DialogWrapperComponent, MojSnackbarComponent],
    declarations: [DialogWrapperComponent, MojMessageComponent, DialogHostDirective, MojSnackbarComponent, MojNotificationComponent],
    providers: [MojMessagesService, MojDialogService]
})
export class MojDialogModule { }