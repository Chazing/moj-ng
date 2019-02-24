// import "reflect-metadata";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { TranslateModule } from "@ngx-translate/core";
import { LoggingService } from "../error-handling/logging.service";
import { MojTranslateLoader } from "./moj-translate-loader";

import { MojBottonModule } from "../elements/buttons/moj-button.module";
import { MojLineModule } from "../elements/general/moj-line.module";
import { MojLabelModule } from "../elements/label/moj-label.module";
import { MojDialogModule } from "../messages/moj-dialog.module";
import { MojDirectiveModule } from "../directives/moj-directive.module";

import { MojPanelComponent } from "../elements/panels/moj-panel.component";
import { MojWebsiteModule } from "../elements/website/moj-website.module";
import { InternalGridService } from "../elements/grid/service/internal-grid.service";
import { MojLoadingModule } from "../elements/moj-loading/moj-loading.module";
import { MojUtilsService } from "./utils";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MojBottonModule,
    MojLineModule,
    MojLabelModule,
    MojDialogModule,
    MojDirectiveModule,
    MojWebsiteModule,
    MojLoadingModule
  ],
  declarations: [MojPanelComponent],
  exports: [
    CommonModule,
    FormsModule,
    MojPanelComponent,
    MojLoadingModule,
    MojBottonModule,
    MojLineModule,
    MojLabelModule,
    MojDialogModule,
    MojDirectiveModule
  ],
  providers: [
    LoggingService,
    InternalGridService,
    MojUtilsService
  ]
})
export class MojSharedModule {}
