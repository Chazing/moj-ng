import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { DataTableModule, DialogModule } from "primeng/primeng";
import {
  MojGridAddButtonComponent,
  MojGridSaveButtonComponent,
  MojGridCancelButtonComponent,
  MojGridDeleteButtonComponent,
  MojGridEditButtonComponent,
  MojGridDuplicateButtonComponent,
} from "./buttons/moj-grid-buttons";
import {
  MojLinkColumnComponent,
  MojStateColumnComponent,
  MojVColumnComponent,
  MojIconColumnComponent,
  MojGridActionsPopupButtonComponent
} from "./custom-columns/moj-grid-columns";
import { MojGridPanelComponent } from "./moj-grid-panel";
import { MojGridOptionsDirective } from "./moj-grid-options";
import { AgGridModule } from "ag-grid-angular";
import { MojRadiobuttonColumnComponent } from "./custom-columns/moj-radiobutton-column/moj-radiobutton-column.component";
import { ActionsPopupComponent } from "../actions-popup/actions-popup.component";
import { MojCheckBoxColumnComponent } from "./custom-columns/moj-checkbox-column/moj-checkbox-column.component";
import { LicenseManager } from "ag-grid-enterprise";
import { MojDocumentFormatColumnComponent } from './custom-columns/moj-document-format-column/moj-document-format-column.component';
import { MojGridXlsExportComponent } from "./moj-grid-xls-export/moj-grid-xls-export.component";
import { MojViewRowDetailsComponent } from './view-row-details/view-row-details.component';
import { MojPipesModule } from "../../pipes/moj-pipes-module";
import { MojInputModule } from "../input.module";
import { MojTextboxColumnComponent, 
  MojTextAreaColumnComponent,
  MojDropdownColumnComponent,
  MojAutoCompleteColumnComponent,
  MojMultiSelectColumnComponent,
  MojDatePickerColumnComponent } from "./edit-inline/edit-inline-columns";
import { MojQuickFilterComponent } from "./filters/moj-quick-filter";
import { MojPagingComponent } from "./pagination/moj-paging.component";
import { DropdownModule } from "primeng/primeng";
import { MojDirectiveModule } from "../../directives/moj-directive.module";
import { MojGridPrintButtonComponent } from './moj-grid-print-button/moj-grid-print-button.component'
import { MojSharedModule } from "../../shared/moj.shared.module";
import { GridService } from "./service/moj-grid.service";
import { MojFileUploadModule } from "../file-upload/moj-file-upload.module";

LicenseManager.setLicenseKey(
  "Software_Sources_Ltd._on_behalf_of_Israeli_Ministry_Of_Justice_MultiApp_1Devs11_April_2019__MTU1NDkzNzIwMDAwMA==1baea05d9fd5b715079f6fd9434861d6"
);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DialogModule,
    MojInputModule,
    MojSharedModule,
    MojPipesModule,
    DropdownModule,
      MojDirectiveModule,
      MojFileUploadModule,
    AgGridModule.withComponents([
      MojGridDeleteButtonComponent,
      MojGridEditButtonComponent,
      MojGridDuplicateButtonComponent,
      MojLinkColumnComponent,
      MojIconColumnComponent,
      MojVColumnComponent,
      MojStateColumnComponent,
      ActionsPopupComponent,
      MojTextboxColumnComponent,
      MojTextAreaColumnComponent,
      MojDropdownColumnComponent,
      MojAutoCompleteColumnComponent,
      MojMultiSelectColumnComponent,
      MojDatePickerColumnComponent
    ])
  ],
  exports: [
    MojGridAddButtonComponent,
    MojGridSaveButtonComponent,
    MojGridCancelButtonComponent,
    MojIconColumnComponent,
    MojCheckBoxColumnComponent,
    MojLinkColumnComponent,
    MojStateColumnComponent,
    MojVColumnComponent,
    MojGridPanelComponent,
    MojGridDeleteButtonComponent,
    MojGridEditButtonComponent,
    MojGridOptionsDirective,
    MojRadiobuttonColumnComponent,
    MojGridActionsPopupButtonComponent,
    ActionsPopupComponent,
    AgGridModule,
    MojGridXlsExportComponent,
    MojQuickFilterComponent,
    MojPagingComponent,
    MojGridPrintButtonComponent
  ],
  declarations: [
    MojGridAddButtonComponent,
    MojGridSaveButtonComponent,
    MojGridCancelButtonComponent,
    MojIconColumnComponent,
    MojCheckBoxColumnComponent,
    MojLinkColumnComponent,
    MojStateColumnComponent,
    MojVColumnComponent,
    MojGridPanelComponent,
    MojGridDeleteButtonComponent,
    MojGridEditButtonComponent,
    MojGridDuplicateButtonComponent,
    MojGridOptionsDirective,
    MojRadiobuttonColumnComponent,
    MojGridActionsPopupButtonComponent,
    ActionsPopupComponent,
    MojDocumentFormatColumnComponent,    
    MojGridXlsExportComponent, 
    MojViewRowDetailsComponent,
    MojTextboxColumnComponent, 
    MojTextAreaColumnComponent,
    MojDropdownColumnComponent,
    MojAutoCompleteColumnComponent,
    MojMultiSelectColumnComponent,
    MojDatePickerColumnComponent,
    MojQuickFilterComponent,
    MojPagingComponent,
    MojGridPrintButtonComponent],
  entryComponents: [
    MojIconColumnComponent,
    MojRadiobuttonColumnComponent,
    MojGridActionsPopupButtonComponent,
    MojCheckBoxColumnComponent,
    MojDocumentFormatColumnComponent,
    MojViewRowDetailsComponent
  ],
  providers:[GridService]
})
export class MojGridModule { }
