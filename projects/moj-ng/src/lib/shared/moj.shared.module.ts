import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { LoggingService } from "../error-handling/logging.service";
import { MojBottonModule } from "../elements/buttons/moj-button.module";
import { MojLineModule } from "../elements/general/moj-line.module";
import { MojLabelModule } from "../elements/label/moj-label.module";
import { MojDialogModule } from "../messages/moj-dialog.module";
import { MojDirectiveModule } from "../directives/moj-directive.module";
import { InternalGridService } from "../elements/grid/service/internal-grid.service";
import { MojLoadingModule } from "../elements/moj-loading/moj-loading.module";
import { MojHttpInterceptor } from "./moj-http-interceptor";
import { MojConfigService } from "./moj-config.service";
import { CSRFService } from "./moj-csrf.service";
import { MojFieldsetModule } from "../elements/fieldset/moj-fieldset.module";
import { PanelsModule } from "../elements/panels/panels.module";
import { MojUtilsService } from './utils';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        TranslateModule,
        MojBottonModule,
        MojLineModule,
        MojLabelModule,
        MojDialogModule,
        MojDirectiveModule,
        MojLoadingModule,
        MojFieldsetModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PanelsModule,
        MojLoadingModule,
        MojBottonModule,
        MojLineModule,
        MojLabelModule,
        MojDialogModule,
        MojDirectiveModule,
        MojFieldsetModule
    ],
    providers: [
        LoggingService,
        InternalGridService,
        { provide: HTTP_INTERCEPTORS, useClass: MojHttpInterceptor, deps: [CSRFService, MojConfigService, MojUtilsService], multi: true }
    ]
})
export class MojSharedModule { }
